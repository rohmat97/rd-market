import { useCart } from "../context/CartContext";
import PayPalCheckout from "./PayPalCheckout";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <p className="text-gray-500">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      <div className="space-y-4 mb-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0"
          >
            <div className="flex-1">
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-sm text-gray-500">
                ${item.price.toFixed(2)} x {item.quantity}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                  -
                </button>
                <span className="px-2 text-sm">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4 border-gray-200 dark:border-gray-600 mb-6">
        <div className="flex justify-between items-center text-xl font-bold">
          <span>Total:</span>
          <span>${cartTotal.toFixed(2)} CAD</span>
        </div>
      </div>

      <div className="mt-4">
        <PayPalCheckout />
      </div>
    </div>
  );
}
