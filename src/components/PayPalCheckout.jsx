import { PayPalButtons } from "@paypal/react-paypal-js";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function PayPalCheckout() {
  const { cartTotal, clearCart } = useCart();
  const [success, setSuccess] = useState(false);
  const [orderID, setOrderID] = useState(false);

  // PayPal requires the amount to be a string with 2 decimal places
  const amount = cartTotal.toFixed(2);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: "RD Market Purchase",
          amount: {
            currency_code: "CAD",
            value: amount,
          },
        },
      ],
    });
  };

  const onApprove = async (data, actions) => {
    const order = await actions.order.capture();
    setSuccess(true);
    setOrderID(order.id);
    clearCart();
  };

  if (success) {
    return (
      <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center">
        <h3 className="font-bold text-lg mb-2">Payment Successful!</h3>
        <p>Thank you for your purchase.</p>
        <p className="text-sm mt-1">Order ID: {orderID}</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={createOrder}
        onApprove={onApprove}
        forceReRender={[amount]}
      />
    </div>
  );
}
