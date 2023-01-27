import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';
import CartItem from './CartItem';
import storeItems from '../data/items.json';

type StoreItem = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function ShoppingCart() {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <div
      className="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-96"
      tabIndex={-1}
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header flex items-center justify-between p-4">
        <h5
          className="offcanvas-title mb-0 leading-normal font-semibold"
          id="offcanvasRightLabel">
          Cart
        </h5>
        <button
          type="button"
          className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          onClick={closeCart}></button>
      </div>
      <div className="offcanvas-body flex-grow p-4 overflow-y-auto">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="text-xl font-bold text-right">
          Total:{' '}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = storeItems.find(
                (i) => i.id === cartItem.id
              ) as StoreItem;

              return total + cartItem.quantity * (item?.price || 0);
            }, 0)
          )}
        </div>
      </div>
    </div>
  );
}
