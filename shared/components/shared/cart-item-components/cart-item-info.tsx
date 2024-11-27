interface Props {
  name: string;
  size?: number | null;
  type?: string | null;
}

export const CartItemInfo: React.FC<Props> = ({ name, size, type }) => {
  return (
    <div>
      <p className='text-xs text-gray-400'>{type}</p>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-bold flex-1 leading-6'>{name}</h2>
      </div>
      <p className='text-xs text-gray-400'>EU: {size}</p>
    </div>
  );
};
