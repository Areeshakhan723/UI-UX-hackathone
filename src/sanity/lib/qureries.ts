import groq from "groq";

export const allproducts = groq `*[_type == "product"]`;
export const category = groq `*[_type == "product"][0..3]`;
export const populerproducts = groq `*[_type == "product"][4..7]`;

