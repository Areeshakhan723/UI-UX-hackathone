"use server";

import { client } from "@/sanity/lib/client";

export type Order = {
    _type: "order";
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    postalCode?: string;  // Make postalCode optional
    paymentMethod: string;
    cartItems: {
      _key: string;
      _type: "reference";
      _ref: string;
    }[];
    total: string;
    orderDate: string;
    orderStatus: string;
  };

export async function createOrderAction(orderData: Order) {
  try {
    const createdOrder = await client.create(orderData);
    return { success: true, data: createdOrder };
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, error: (error as Error).message };
  }
}
