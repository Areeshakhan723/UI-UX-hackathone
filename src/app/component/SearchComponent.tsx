"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { ProductTypes } from "../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import SearchInput, { createFilter } from "react-search-input";
import { Search } from "lucide-react";

const KEYS_TO_FILTERS = ["name"]; // Define the keys

const SearchComponent = () => {
  const [products, setProducts] = useState<ProductTypes[]>([]); // State for all products
  const [filteredProducts, setFilteredProducts] = useState<ProductTypes[]>([]); // Filtered product list
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [showInput, setShowInput] = useState<boolean>(false); // Toggle search input visibility
  const [searchTerm, setSearchTerm] = useState<string>(""); // Track search term
  const router = useRouter(); // Next.js router hook

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"]`; // Query to fetch products
        const fetchedProducts: ProductTypes[] = await client.fetch(query);
        setProducts(fetchedProducts); // Save products to state
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchProducts();
  }, []);

  // Update filtered products whenever the search term changes
  const searchUpdated = (term:string) => {
    setSearchTerm(term); // Update search term
    const filtered = products.filter(createFilter(term, KEYS_TO_FILTERS));
    setFilteredProducts(filtered);
  };

  // Handle product click and navigate to the product page
  const handleProductClick = (id: string) => {
    router.push(`/component/${id}`); // Navigate to the dynamic route
  };

  return (
    <div className="p-4 relative w-full">
      <div className="absolute w-auto z-50">
        {/* Search Icon */}
        <div
          className="cursor-pointer text-gray-600 flex items-center gap-2 hover:scale-110"
          onClick={() => setShowInput(!showInput)} // Toggle input visibility
        >
          <Search size={24} />
        </div>

        {/* Show search input only when showInput is true */}
        {showInput && (
          <SearchInput
            className="search-input w-full z-50 mt-2 outline-none"
            onChange={searchUpdated}
            placeholder="Search for a product..."
          />
        )}

        {/* Product Suggestions */}
        {loading ? (
          <p></p>
        ) : (
          filteredProducts.length > 0 && (
            <div className="top-full left-0 w-full max-w-[500px] bg-white shadow-lg rounded-md p-2 mt-1 z-50">
              <ul>
                {filteredProducts.map((product) => (
                  <li
                    key={product._id}
                    className="cursor-pointer p-2 hover:bg-gray-100 rounded flex items-center gap-3"
                    onClick={() => handleProductClick(product._id)}
                  >
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.name}
                      height={50}
                      width={50}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <span className="text-sm font-medium">{product.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}

        {/* No Products Found: Show only if search term is not empty and no matches found */}
        {!loading && searchTerm && filteredProducts.length === 0 && (
          <p className="text-black mt-2">No products match your search.</p>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
