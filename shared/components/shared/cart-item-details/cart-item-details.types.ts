export interface CartItemProps {
  id: number;
  imageUrl: string;
  onClickRemove?: () => void;
  disabled?: boolean;
  name: string;
  price: number;
  quantity: number;
  type: string;
  size: number;
}
