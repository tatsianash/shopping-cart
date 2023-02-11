import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';

interface IProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}
export default function StoreItem({ id, name, price, imgUrl }: IProps) {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div className="max-w-sm rounded-md shadow-xl">
      <img
        src={imgUrl}
        alt={name}
        className="w-full object-cover overflow-hidden h-52"
      />
      <div className="flex flex-col p-4">
        <div className="container flex justify-between ">
          <div className="text-lg font-medium">{name}</div>
          <div className="ml-2 text-gray-700">{formatCurrency(price)}</div>
        </div>
        <div className="max-w-full  mt-5">
          {quantity === 0 ? (
            <button
              onClick={() => increaseItemQuantity(id)}
              className="bg-emerald-600 text-white font-medium rounded-sm px-2 py-1 w-full">
              + Add To Cart
            </button>
          ) : (
            <div className="flex flex-col items-center">
              <div className="flex  justify-items-center">
                <button
                  onClick={() => decreaseItemQuantity(id)}
                  className="bg-emerald-600 text-white font-medium rounded-sm px-3 py-1 w-fit">
                  -
                </button>
                <div className="mx-3 mt-1">
                  <span className="text-lg">{quantity}</span> in cart
                </div>
                <button
                  onClick={() => increaseItemQuantity(id)}
                  className="bg-emerald-600 text-white font-medium rounded-sm px-3 py-1 w-fit">
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(id)}
                className="bg-amber-700 text-white font-medium rounded-sm px-2 py-1 w-fit mt-4">
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
