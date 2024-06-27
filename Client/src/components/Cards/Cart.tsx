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
    <div className="flex items-center justify-between border-b pb-4">
      <div className="flex items-center space-x-4">
        <img src={image} alt={name} className="h-16 w-16 object-cover" />
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-gray-500">${price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => decrementQuantity(id)}
          className="rounded-full bg-gray-200 px-2 py-1 text-sm"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => incrementQuantity(id)}
          className="rounded-full bg-gray-200 px-2 py-1 text-sm"
        >
          +
        </button>
      </div>
      <button
        onClick={() => removeItem(id)}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        <IoMdClose className="h-6 w-6" />
      </button>
    </div>
  );
};

export default CartCard;
