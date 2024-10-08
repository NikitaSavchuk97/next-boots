import { instance } from './instance';
import { ApiRoutes } from './constants';
import { ProductItem } from '@prisma/client';

interface ProductDataPropsTypes {
  name: string;
  previewImageUrl: string;
  hoverPreviewImageUrl: string;
  images: string[];
  brand: string;
  model: string;
  mainColorEN: string;
  mainColorRU: string;
  male: string;
  items: ProductItem[];
  categoryId: number;
}

interface DataPropsTypes {
  imagesFilesData: File[];
  productData: ProductDataPropsTypes;
}

export const postProduct = async ({ imagesFilesData, productData }: DataPropsTypes) => {
  try {
    const productImagesAndData = new FormData();

    for (let i = 0; i < imagesFilesData?.length; i++) {
      productImagesAndData.append('filesData', imagesFilesData[i]);
    }

    productImagesAndData.append(
      'productData',
      JSON.stringify({
        name: productData.name,
        previewImageUrl: '',
        hoverPreviewImageUrl: '',
        images: [],
        brand: productData.brand,
        model: productData.model,
        mainColorEN: productData.mainColorEN,
        mainColorRU: productData.mainColorRU,
        male: productData.male,
        items: [
          {
            productId: 9,
            bootType: 1,
            price: 12000,
            quantityOfProductItem: 5,
            size: 39,
          },
        ],
        categoryId: productData.categoryId,
      }),
    );

    const { data } = await instance.post<DataPropsTypes>(
      ApiRoutes.POST_PRODUCT,
      productImagesAndData,
      {
        headers: {
          'content-type': 'multipart/form-data',
        },
      },
    );
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};
