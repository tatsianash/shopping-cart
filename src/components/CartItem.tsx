import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import storeItems from '../data/items.json';
import { formatCurrency } from '../utilities/formatCurrency';

type CartItemProps = {
  id: number;
  quantity: number;
};
type StoreItem = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id) as StoreItem;
  const { name, imgUrl, price } = item;
  const itemTotal = price * quantity;

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 h-24 items-center">
        <img
          src={imgUrl}
          alt={name}
          className="h-20 w-32 object-cover overflow-hidden"
        />
        <div>
          <div>
            {name}
            <span className="font-light text-gray-500 text-sm">
              &nbsp;&times;{quantity}
            </span>
          </div>
          <span className="font-light text-gray-500 text-sm">
            {formatCurrency(price)}
          </span>
        </div>
        <div className="justify-self-end">
          {formatCurrency(itemTotal)}
          <button
            onClick={() => removeFromCart(id)}
            className="ml-2 outline-1 rounded-sm border text-gray-500  border-gray-500 w-8 h-8">
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}
