interface Props {
  name: string;
  pizzaSize?: number | null;
  type?: number | null;
}

export const CartItemInfo: React.FC<Props> = ({ name, pizzaSize, type }) => {
  // const details = [];

  // if (pizzaSize) {
  //   const typeName = type === 1 ? 'Традиционное' : 'Тонкое';
  //   details.push(`${typeName} ${pizzaSize} см`);
  // }

  return (
    <div>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-bold flex-1 leading-6'>{name}</h2>
      </div>
      <p className='text-xs text-gray-400'>кроссы кроссы</p>
    </div>
  );
};
