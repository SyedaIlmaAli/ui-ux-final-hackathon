"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Product = {
    id: string;
    src: string;
    alt: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
  };
  
  type OrderDetails = {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    paymentMethod: string;
    cartProducts: Product[];
    subTotal: number;
    appliedDiscount: number;
    total: number;
  };

const OrderConfirmationPage = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Retrieving the order details from localStorage or other state management
    const storedOrder = localStorage.getItem("orderDetails");
    if (storedOrder) {
      setOrderDetails(JSON.parse(storedOrder));
    } else {
      router.push("/"); // Redirect to home if order details are not found
    }
  }, [router]);

  const handleGoBackToHome = () => {
    router.push("/"); // Navigate back to the home page
  };

  return (
    <div className="bg-[#F9F9F9] min-h-screen">
      <div className="container mx-auto px-8 py-10">
        <h1 className="text-[32px] font-bold text-myDarkBlue">Order Confirmation</h1>

        {orderDetails ? (
          <>
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-myDarkBlue">Thank you for your order, {orderDetails.fullName}!</h2>
              <p className="mt-4 text-lg text-gray-600">
                Your order has been successfully placed and will be processed shortly.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-myDarkBlue">Order Summary</h2>
              <div className="border-t mt-4 pt-4">
                {orderDetails.cartProducts.map((product: Product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between py-2 border-b"
                  >
                    <p className="text-lg">
                      {product.title} x {product.quantity} = £
                      {product.price * product.quantity}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-4">
                <p className="text-xl font-semibold">Subtotal:</p>
                <p className="text-xl font-semibold">£{orderDetails.subTotal}</p>
              </div>

              {orderDetails.appliedDiscount > 0 && (
                <div className="flex justify-between mt-2">
                  <p className="text-lg text-green-600">Discount:</p>
                  <p className="text-lg text-green-600">-£{orderDetails.appliedDiscount}</p>
                </div>
              )}

              <div className="flex justify-between mt-4">
                <p className="text-xl font-bold">Total:</p>
                <p className="text-xl font-bold">£{orderDetails.total}</p>
              </div>
            </div>

            <div className="mt-10 flex justify-end">
              <Button
                className="w-[172px] h-[56px] rounded-none text-white bg-myDarkBlue"
                onClick={handleGoBackToHome}
              >
                Go Back to Home
              </Button>
            </div>
          </>
        ) : (
          <div className="mt-8 text-lg text-gray-600">
            Order details not found. Please try again later.
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
