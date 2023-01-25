import React from 'react';

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
        <div className="container flex justify-between">
          <div>{name}</div>
          <div>${price}</div>
        </div>
        <div> add to cart</div>
      </div>
    </div>
  );
}
