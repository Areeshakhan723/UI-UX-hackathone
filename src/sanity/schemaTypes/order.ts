import { defineField, defineType } from "sanity";

export const order = defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(15),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "postalCode",
      title: "Postal Code",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(10),
    }),
    defineField({
        name:"cartItems",
        title: "Cart Items",
        type: "array",
        of: [{type: "reference", to : {type: "product"}}],
        validation: (Rule) => Rule.required().min(1).error("Cart must have at least one item"),
    }),
    defineField({
        name:"total",
        title: "Total",
        type: "string",
    }),
    defineField({
    name: "orderStatus",
    title: "Order Status",
    type: "string",
    options: {
        list: [
        { title: "Pending", value: "pending" },
        { title: "Rejected", value: "rejected" },
        { title: "Fulfilled", value: "fulfilled" }, 
        ],
        layout: "radio",
    },
    initialValue: "pending", // Default value
    validation: (Rule) => Rule.required().error("Order status is required"),
    }),
    defineField({
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
      validation: (Rule) => Rule.required().error("Order date is required"),
    }),
    defineField({
      name: "paymentMethod",
      title: "Payment Method",
      type: "string",
      options: {
        list: [
          { title: "Debit Card", value: "Debit card" },
          { title: "Credit Card", value: "Credit card" },
        ],
      },
      validation: (Rule) => Rule.required().error("Payment method is required"),
    }),
    
    
  ],
  
});
