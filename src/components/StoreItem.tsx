import React from 'react';
import { formatCurrency } from '../utilities/formatCurrency';

interface IProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}
export default function StoreItem({ id, name, price, imgUrl }: IProps) {
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
        <div> add to cart</div>
      </div>
    </div>
  );
}
