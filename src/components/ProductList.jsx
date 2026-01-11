import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover bg-gray-100"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {product.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">
                ${product.price.toFixed(2)} CAD
              </span>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
