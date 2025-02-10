"use client";

import { useState } from "react";
import Swal from "sweetalert2";

const Checkout  = () => {
  const [formData, setFormData] = useState({
    email: "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "",
  });

  // fuction
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEvent = () => {
    const {
      email,
      country,
      firstName,
      lastName,
      address,
      city,
      paymentMethod,
    } = formData;

    // Check if required fields are filled
    if (
      !email ||
      !country ||
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
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully submitted",
        showConfirmButton: true,
        timer: 2000,
      });
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
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country/Region"
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


export default Checkout