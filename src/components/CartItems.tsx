import Image from "next/image";
import { FC, useState } from "react";

interface CartItem {
  title: string;
  price: number;
  description: string;
  img: string;
  category: string;
  image?: string; // Optional field for compatibility
}

interface CartItemsProps {
  cart: CartItem[];
  setShowModal: (show: boolean) => void;
  setSelectedItems: (items: CartItem[]) => void;
}

const CartItems: FC<CartItemsProps> = ({
  cart,
  setShowModal,
  setSelectedItems,
}) => {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  const handleCheckboxChange = (index: number) => {
    setSelectedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handlePlaceOrder = () => {
    const selected = cart.filter((_, index) => selectedIndices.includes(index));
    setSelectedItems(selected); // update selected items
    setShowModal(true);
  };

  return (
    <div className="space-y-6">
      {cart.map((item, index) => {
        // const price = parseFloat(item.price.replace("$", ""));
        const price = item.price;
        const tax = (price * 0.1).toFixed(2);
        const salePrice = (price * 0.9).toFixed(2);

        return (
          <div
            key={index}
            className="border p-4 rounded-lg shadow bg-white flex items-start gap-4"
          >
            <input
              type="checkbox"
              checked={selectedIndices.includes(index)}
              onChange={() => handleCheckboxChange(index)}
              className="mt-4"
            />
            <Image
              //   src={item.img}
              //   src={item.image}
              src={item.img || item.image || "/fallback.jpg"}
              alt={item.title}
              width={150}
              height={150}
              className="rounded object-cover "
            />
            <div className="flex-1">
              <p className="text-sm text-gray-500">{item.category}</p>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
              <div className="mt-2">
                <p>Original Price: ${price}</p>
                <p>Tax (10%): ${tax}</p>
                <p className="font-bold text-green-700">
                  Sale Price: ${salePrice}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      <button
        onClick={handlePlaceOrder}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Place Order
      </button>
    </div>
  );
};

export default CartItems;
