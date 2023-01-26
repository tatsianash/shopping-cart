import React from 'react';
import StoreItem from '../components/StoreItem';
import storeItems from '../data/items.json';

export default function Store() {
  return (
    <>
      <h1 className="font-medium py-5">Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {storeItems.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
