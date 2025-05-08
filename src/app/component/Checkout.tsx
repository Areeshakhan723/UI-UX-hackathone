//componenet/checkout input file
"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { useCart } from "../context/CardContext";
import { client } from "@/sanity/lib/client";

const Checkout = () => {
  const { cartItems, getSubTotal } = useCart();

  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "",
  });

  // fuction
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleEvent = async () => {
    const {
      email,
      phoneNumber,
      firstName,
      lastName,
      address,
      city,
      paymentMethod,
    } = formData;

    if (
      !email ||
      !phoneNumber ||
      !firstName ||
      !lastName ||
      !address ||
      !city ||
      !paymentMethod
    ) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please fill all required fields",
        showConfirmButton: true,
      });
      return; // Stop execution if validation fails
    }

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Successfully submitted",
      showConfirmButton: true,
      timer: 2000,
    });

    const OrderData = {
      _type: "order",
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      firstName: formData.firstName,
      lastName: formData.lastName,
      address: formData.address,
      city: formData.city,
      postalCode: formData.postalCode,
      paymentMethod: formData.paymentMethod,
      cartItems: cartItems.map((items) => ({
        _key: items._id,
        _type: "reference",
        _ref: items._id,
      })),
      total: getSubTotal().toString(),
      orderDate: new Date().toISOString(),
      orderStatus: "pending", // Default order status
    };

    try {
      const data = await client.create(OrderData);
      console.log("Order created:", data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed to submit order",
          text: error.message || "Please try again later.",
          showConfirmButton: true,
        });
        console.error("Sanity data submission error:", error.message);
      } else {
        console.error("Sanity data submission error:", error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed to submit order",
          text: "An unknown error occurred. Please try again later.",
          showConfirmButton: true,
        });
      }
    }
  };

  return (
    <div className="bg-white w-auto max-w-[700px] padding">
      <div>
        <h1 className="font-semibold text-lg">Context</h1>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email or mobile phone number"
          required
          className="w-full border-2 border-bordergrey p-2 rounded-md mt-2 outline-none"
        />
      </div>
      <div className="mt-2">
        <h1 className="font-semibold text-lg">Delivery</h1>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter Your Phone number"
          className="w-full border-2 border-bordergrey p-2 rounded-md mt-2 outline-none"
        />
      </div>
      <div className="mt-2 grid grid-cols-2 space-x-3 w-auto">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="border-2 border-bordergrey p-2 rounded-md mt-2 outline-none"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="border-2 border-bordergrey p-2 rounded-md mt-2 outline-none"
        />
      </div>
      <div className="mt-2">
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full border-2 border-bordergrey p-2 rounded-md mt-2 outline-none"
        />
      </div>
      <div className="mt-2 grid grid-cols-2 space-x-3 w-auto">
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          className="border-2 border-bordergrey p-2 rounded-md mt-2 outline-none"
        />
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          placeholder="Postal code (optional)"
          className="border-2 border-bordergrey p-2 rounded-md mt-2 outline-none"
        />
      </div>
      <div className="mt-2">
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          className="w-full border-2 border-bordergrey p-2 rounded-md mt-2 outline-none"
        >
          <option value="">Select payment method</option>
          <option value="Debit card">Debit card</option>
          <option value="Credit card">Credit card</option>
        </select>
      </div>
      <div className="mt-5 flex justify-center items-center px-2 py-2">
        <button
          onClick={handleEvent}
          className="w-full flex justify-center items-center px-2 py-3 text-deco border border-transparent bg-DarkPrimary mt-2 ml-2 md:ml-0 transition duration-300 hover:scale-110 text-white"
        >
          Submit your payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;
