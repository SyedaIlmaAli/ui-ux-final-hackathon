"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CheckoutPage = () => {
  const [cartProducts, setCartProducts] = useState<{
    id: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
    src: string
  }[] >([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cvv: "",
    expiryDate: "",
  });

  const router = useRouter();

  const subTotal =
    cartProducts?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;
  const total = subTotal - appliedDiscount;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCartProducts(JSON.parse(storedCart));
      } else {
        setCartProducts([]);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyDiscount = () => {
    if (discountCode === "SAVE10") {
      setAppliedDiscount(subTotal * 0.1); // 10% discount
      setIsDiscountApplied(true);
    } else {
      alert("Invalid discount code");
    }
  };

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  const handlePlaceOrder = async () => {
    const orderDetails = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      postalCode: formData.postalCode,
      country: formData.country,
      paymentMethod,
      cartProducts: cartProducts.map((product) => ({
        _key: product.id, // Ensure each product has a unique key
        name: product.title, // Mapping title to name
        description: product.description,
        price: product.price,
        quantity: product.quantity,
        image: product.src, // Mapping src to image
      })),
      subTotal,
      discountApplied: appliedDiscount,
      total,
      orderDate: new Date().toISOString(),
    };
  
    const response = await fetch('/api/place-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderDetails }),
    });
  
    if (response.ok) {
      const data = await response.json();
      console.log(data.message);  // Success message from the API
    } else {
      console.error('Order failed:', response.statusText);
    }
  };
  
  
  



  return (
    <>
    <div className="bg-[#F9F9F9] min-h-screen">
      <div className="container mx-auto px-8 py-10">
        <h1 className="text-[32px] font-bold text-myDarkBlue">Checkout</h1>

        {/* Contact Information */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-myDarkBlue">
            Contact Information
          </h2>
          <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="p-3 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="p-3 border rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="p-3 border rounded"
            />
          </form>
        </div>

        {/* Shipping Address */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-myDarkBlue">Shipping Address</h2>
          <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              className="p-3 border rounded"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              className="p-3 border rounded"
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleInputChange}
              className="p-3 border rounded"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleInputChange}
              className="p-3 border rounded"
            />
          </form>
        </div>

        {/* Apply Discount Code */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-myDarkBlue">Apply Discount Code</h2>
          <div className="mt-4 flex items-center gap-4">
            <input
              type="text"
              placeholder="Discount Code"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              className="p-3 border rounded w-full md:w-auto"
            />
            <Button
              className="w-[172px] h-[56px] rounded-none text-white bg-myDarkBlue"
              onClick={handleApplyDiscount}
              disabled={isDiscountApplied}
            >
              {isDiscountApplied ? "Applied" : "Apply"}
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-myDarkBlue">Order Summary</h2>
          <div className="border-t mt-4 pt-4">
            {cartProducts && cartProducts.length > 0 ? (
              cartProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between py-2 border-b"
                >
                  <p className="text-lg">
                    £{product.price} x {product.quantity} = £
                    {product.price * product.quantity}
                  </p>
                </div>
              ))
            ) : (
              <p>No items in your cart.</p>
            )}
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-xl font-semibold">Subtotal:</p>
            <p className="text-xl font-semibold">£{subTotal}</p>
          </div>
          {appliedDiscount > 0 && (
            <div className="flex justify-between mt-2">
              <p className="text-lg text-green-600">Discount:</p>
              <p className="text-lg text-green-600">-£{appliedDiscount}</p>
            </div>
          )}
          <div className="flex justify-between mt-4">
            <p className="text-xl font-bold">Total:</p>
            <p className="text-xl font-bold">£{total}</p>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-myDarkBlue">Payment Method</h2>
          <div className="mt-4 flex gap-4">
            <Button
              onClick={() => handlePaymentMethodChange("cash")}
              className={`p-3 rounded ${
                paymentMethod === "cash" ? "bg-myDarkBlue text-white" : "border"
              }`}
            >
              Cash on Delivery
            </Button>
            <Button
              onClick={() => handlePaymentMethodChange("card")}
              className={`p-3 rounded ${
                paymentMethod === "card" ? "bg-myDarkBlue text-white" : "border"
              }`}
            >
              Credit/Debit Card
            </Button>
          </div>
          {paymentMethod === "cash" && (
            <p className="mt-4 text-gray-600">
              You will pay cash when the order is delivered.
            </p>
          )}
          {paymentMethod === "card" && (
            <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={cardDetails.cardNumber}
                onChange={handleCardDetailsChange}
                className="p-3 border rounded"
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={cardDetails.cvv}
                onChange={handleCardDetailsChange}
                className="p-3 border rounded"
              />
              <input
                type="text"
                name="expiryDate"
                placeholder="Expiry Date (MM/YY)"
                value={cardDetails.expiryDate}
                onChange={handleCardDetailsChange}
                className="p-3 border rounded"
              />
            </form>
          )}
        </div>

          <Link href= "/order-confirmation">
        <div className="mt-10 flex justify-end">
        {/* Place Order */}
          <Button
            className="w-[172px] h-[56px] rounded-none text-white bg-myDarkBlue"
            onClick={handlePlaceOrder}
            disabled={!cartProducts || cartProducts.length === 0}
          >
            Place Order
          </Button>
        </div>
            </Link>
      </div>
    </div>
    </>
  );
};

export default CheckoutPage;
