'use client';

import { useState } from 'react';
import { Api } from '../../../services/api-client';
import { Button, Input } from '@/components/ui';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ProductAddPage = () => {
  const [imagesFilesData, setImagesFilesData] = useState<File[]>([]);
  const [productData, setProductData] = useState({
    name: '',
    previewImageUrl: '',
    hoverPreviewImageUrl: '',
    images: [],
    brand: '',
    model: '',
    mainColorEN: '',
    mainColorRU: '',
    male: '',
    items: [],
    categoryId: 0,
  });

  const handleChange = (event: any | { name: string; value: string | number }) => {
    const values = {
      name: event.target ? event.target.name : event.name,
      value: event.target ? event.target.value : event.value,
    };

    setProductData((prev) => ({ ...prev, [values.name]: values.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (imagesFilesData?.length === 0) return;

    try {
      Api.postProduct
        .postProduct({ imagesFilesData, productData })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col pl-20 pt-20 max-w-[600px]'>
      <Input type='text' name='name' placeholder='Название' onChange={handleChange} required />
      <br />
      <Input type='text' name='brand' placeholder='Бренд' onChange={handleChange} required />
      <br />
      <Input type='text' name='model' placeholder='Модель' onChange={handleChange} required />
      <br />
      <Input
        type='text'
        name='mainColorEN'
        placeholder='Основной цвет (EN)'
        onChange={handleChange}
        required
      />
      <br />
      <Input
        type='text'
        name='mainColorRU'
        placeholder='Основной цвет (RU)'
        onChange={handleChange}
        required
      />
      <br />
      <Select name='male' onValueChange={(e) => handleChange({ name: 'male', value: e })}>
        <SelectTrigger className='w-[180px] bg-gray-200' aria-required>
          <SelectValue placeholder='Пол' className='' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='UNISEX'>Унисекс</SelectItem>
            <SelectItem value='MALE'>Мужской</SelectItem>
            <SelectItem value='FEMALE'>Женский</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <br />

      <Select
        name='categoryId'
        onValueChange={(e) => {
          handleChange({ name: 'categoryId', value: Number(e) });
        }}
      >
        <SelectTrigger className='w-[180px] bg-gray-200' aria-required>
          <SelectValue placeholder='Категория' className='' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='1'>Кроссовки</SelectItem>
            <SelectItem value='2'>Кеды</SelectItem>
            <SelectItem value='3'>Сандалии</SelectItem>
            <SelectItem value='4'>Ботинки</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <br />
      <Input
        type='file'
        name='files'
        accept='image/jpeg'
        multiple
        onChange={(e: any) => setImagesFilesData(Array.from(e.target.files))}
        required
      />
      <br />
      <Button type='submit'>Добавить продукт</Button>
    </form>
  );
};

export default ProductAddPage;
