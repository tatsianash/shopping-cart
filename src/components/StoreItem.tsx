import React from 'react';

interface IProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}
export default function StoreItem({ id, name, price, imgUrl }: IProps) {
  return <div>{name}</div>;
}
