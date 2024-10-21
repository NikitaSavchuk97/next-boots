export interface CartItemProps {
  id: number;
  imageUrl: string;
  onClickRemove?: () => void;
  name: string;
  price: number;
  quantity: number;
  type: string;
  size: number;
}
