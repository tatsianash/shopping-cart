import React from 'react';
import { Navbar as NavbarMU, Typography } from '@material-tailwind/react';
import { useShoppingCart } from '../context/ShoppingCartContext';

export default function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarMU className="bg-emerald-300 shadow-lg mb-3 py-4  h-20 sticky top-0">
      <div className="container mx-auto flex justify-between">
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal">
            <a href="/" className="flex items-center hover:text-gray-500">
              Home
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal">
            <a href="/store" className="flex items-center hover:text-gray-500">
              Store
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal">
            <a href="/about" className="flex items-center hover:text-gray-500">
              About
            </a>
          </Typography>
        </ul>
        {cartQuantity > 0 && (
          <button
            onClick={openCart}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            className="transition duration-150 ease-in-out mr-1.5 p-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-full inline-flex items-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="fill-current w-6 h-6 ml-1">
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>

            <div
              className="bg-red-500 rounded-full flex justify-center align-center"
              style={{
                color: 'white',
                width: '1.5rem',
                height: '1.5rem',
                position: 'absolute',
                bottom: 0,
                right: 0,
                transform: 'translate(25%, 25%)',
              }}>
              {cartQuantity}
            </div>
          </button>
        )}
      </div>
    </NavbarMU>
  );
}
