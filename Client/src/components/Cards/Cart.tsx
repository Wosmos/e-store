// CartCard.tsx
import React from "react";
import { IoMdClose } from "react-icons/io";

interface CartCardProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  removeItem: (id: number) => void;
}

const CartCard: React.FC<CartCardProps> = ({
  id,
  name,
  price,
  quantity,
  image,
  incrementQuantity,
  decrementQuantity,
  removeItem,
}) => {
  return (
    <div className="flex items-center justify-between border-b  py-4">
      <div className="flex items-center">
        <img src={image} alt={name} className="h-16 w-16 object-cover" />
        <div className="ml-4">
          <h3 className="text-sm font-medium">{name}</h3>
          <p className="text-sm text-gray-500">${price.toFixed(2)}</p>
          <div className="mt-1 flex items-center border border-gray-200 rounded-md ">
            <button
              onClick={() => decrementQuantity(id)}
              className=" px-2 py-1 text-sm"
            >
              -
            </button>
            <span className="mx-2 text-sm">{quantity}</span>
            <button
              onClick={() => incrementQuantity(id)}
              className=" px-2 py-1 text-sm"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={() => removeItem(id)}
        className="text-gray-500 hover:text-red-500"
      >
        <IoMdClose className="h-5 w-5" />
      </button>
    </div>
  );
};

export default CartCard;
