'use client';

import { FC, useEffect, useState } from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: FC<Props> = ({ onChange }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <AddressSuggestions
        token='858d6691def9cdadc868a471463d6d326821a267'
        onChange={(data) => onChange?.(data?.value)}
      />
    )
  );
};
