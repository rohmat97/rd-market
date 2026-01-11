import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const initialOptions = {
    "client-id": "test", // Replace with your actual PayPal Client ID
    currency: "CAD",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <CartProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <header className="bg-white dark:bg-gray-800 shadow-sm">
            <div className="container mx-auto px-4 py-4">
              <h1 className="text-2xl font-bold text-blue-600">RD Market</h1>
            </div>
          </header>

          <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-xl font-semibold mb-4">Products</h2>
                <ProductList />
              </div>
              <div className="lg:col-span-1">
                <Cart />
              </div>
            </div>
          </main>
        </div>
      </CartProvider>
    </PayPalScriptProvider>
  );
}

export default App;
