// CartDrawer.tsx
import React from "react";
import { IoMdClose } from "react-icons/io";
import CartCard from "../Cards/Cart";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  removeItem: (id: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  incrementQuantity,
  decrementQuantity,
  removeItem,
}) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 w-10/12 transform bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out md:w-1/3 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between">
        <h1 className="flex font-poppins text-[24px] font-medium leading-[1]">
          Cart
        </h1>
        <button
          className="text-[14px] font-medium text-[#6c7275]"
          onClick={onClose}
        >
          <IoMdClose className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {cartItems.map((item) => (
          <CartCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            image={item.image}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            removeItem={removeItem}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        <span className="font-medium">Total:</span>
        <span className="font-bold">${totalPrice.toFixed(2)}</span>
      </div>

      <button className="relative mt-6 flex w-full transform items-center justify-center gap-8 rounded-lg bg-[#141718] py-2.5 font-inter font-medium leading-[1.63] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#38cb89]">
        Checkout
      </button>
    </div>
  );
};

export default CartDrawer;
