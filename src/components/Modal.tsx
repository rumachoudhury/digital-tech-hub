import { FC } from "react";

interface CartItem {
  title: string;
  price: string;
  description: string;
  image: string;
}

interface ModalProps {
  showModal: boolean;
  cart: CartItem[];
  setShowModal: (show: boolean) => void;
}

const Modal: FC<ModalProps> = ({ showModal, cart, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">🧾 Order Summary</h2>
        <ul className="mb-4 space-y-2">
          {cart.map((item, index) => {
            const price = parseFloat(item.price);
            // const price = parseFloat(item.price.replace("$", ""));
            const tax = (price * 0.1).toFixed(2);
            const salePrice = (price * 0.9).toFixed(2);
            return (
              <li key={index} className="border-b pb-2">
                <p className="font-semibold">{item.title}</p>
                <p>Price: ${price.toFixed(2)}</p>
                <p>Tax: ${tax}</p>
                <p>Sale: ${salePrice}</p>
              </li>
            );
          })}
        </ul>

        <div className="flex justify-end gap-4">
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              alert("Order confirmed!");
              setShowModal(false);
            }}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
