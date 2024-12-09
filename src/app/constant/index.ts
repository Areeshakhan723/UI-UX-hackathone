import {
  img1,
  img2,
  img3,
  img4,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
} from "./images";

export const Featurescards = [
  {
    imgicon: img1,
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard",
  },
  {
    imgicon: img2,
    title: "Made by true artisans",
    description:
      "Handmade crafted goods made with real passion and craftmanship",
  },
  {
    imgicon: img3,
    title: "Unbeatable prices",
    description:
      "For our materials and quality you won’t find better prices anywhere",
  },
  {
    imgicon: img4,
    title: "Recycled packaging",
    description:
      "We use 100% recycled packaging to ensure our footprint is manageable",
  },
];
 

export const populerproduct = [
  {
    img: img8,
    name: "The Dandy chair",
    price: "£250",
  },
  {
    img: img9,
    name: "Rustic Vase Set",
    price: "£155",
  },
  {
    img: img10,
    name: "The Silky Vase",
    price: "£125",
  },
  {
    img: img11,
    name: "The Lucy Lamp",
    price: "£399",
  },
];

export const product = [
  {
    img: img13,
    name: "The yellow chair",
    price: "£980",
  },
  {
    img: img8,
    name: "The Dandy chair",
    price: "£299",
  },
  {
    img: img12,
    name: "The Black chair",
    price: "£299",
  },
  {
    img: img11,
    name: "The Lucy Lamp",
    price: "£299",
  },
];

export const allProducts = [...populerproduct, ...product];

export const footerLinks = [
  {
    title: "Menu",
    links: [
      { name: "New arrivals", link: "/" },
      { name: "Best sellers", link: "/" },
      { name: "Recently viewed", link: "/" },
      { name: "Popular this week", link: "/" },
      { name: "All products", link: "/" },
    ],
  },
  {
    title: "Categories",
    links: [
      { name: "Crockery", link: "/" },
      { name: "Furniture", link: "/" },
      { name: "Homeware", link: "/" },
      { name: "Plant pots", link: "/" },
      { name: "Chairs", link: "/" },
    ],

  },
  {
    title: "Our company",
    links: [
      { name: "About us", link: "/" },
      { name: "Vacancies", link: "/" },
      { name: "Contact us", link: "/" },
      { name: "Privacy", link: "/" },
      { name: "Returns policy", link: "/" },
    ],
  }
];
