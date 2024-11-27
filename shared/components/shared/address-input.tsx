'use client';

import { FC } from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token='858d6691def9cdadc868a471463d6d326821a267'
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
