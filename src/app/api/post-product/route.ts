import { writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';
import fs from 'fs';
import { prisma } from '../../../../prisma/prisma-client';

export async function POST(request: NextRequest) {
  const imagesNames: string[] = [];
  const formData = await request.formData();
  const files = formData.getAll('filesData');
  const productString = formData.get('productData') as string;
  const { name, brand, model, mainColorEN, mainColorRU, male, categoryId, items } = productString
    ? JSON.parse(productString)
    : {};

  if (files.length === 0) {
    return NextResponse.json({ success: false, message: 'No files uploaded' });
  }

  const uploadDir = join(process.cwd(), 'public/uploads/');

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true, mode: 0o755 });
  }

  const getFileExtension = (fileName: string) => {
    return fileName.slice(Math.max(0, fileName.lastIndexOf('.')), fileName.length);
  };

  const uploadPromises = files.map(async (file: any, index: number) => {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uniqueFileName = `${name}-${index + 1}-${Date.now()}${getFileExtension(file.name)}`;
    const path = join(uploadDir, uniqueFileName);
    imagesNames.push(uniqueFileName);
    await writeFile(path, buffer);
  });

  if (!name || !mainColorEN || !mainColorRU) {
    return NextResponse.json(
      { success: false, message: 'Missing required fields' },
      { status: 400 },
    );
  }

  try {
    // Сначала загружаем файлы
    await Promise.all(uploadPromises);

    // Теперь создаем продукт с загруженными изображениями
    const newProduct = await prisma.product.create({
      data: {
        name: name,
        categoryId: categoryId,
        previewImageUrl: '123',
        hoverPreviewImageUrl: '123',
        images: imagesNames,
        brand: brand,
        model: model,
        mainColorEN: mainColorEN,
        mainColorRU: mainColorRU,
        male: male,
        items: {
          create: items.map((item: any) => ({
            price: item.price,
            quantityOfProductItem: item.quantityOfProductItem,
            size: item.size,
            bootType: item.bootType,
          })),
        },
      },
    });
    return NextResponse.json({ success: true, product: newProduct });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error creating product',
      },
      { status: 500 },
    );
  }
}
