import React, { useState } from "react";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [filters, setFilters] = useState({
    productType: "",
    price: "",
    designer: "",
  });

  const handleFilterChange = (category: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: value,
    }));
  };

  return (
    <div>
      {/* Toggle Button - Visible only on small devices */}
      <button
        onClick={toggleSidebar}
        className="p-3 bg-LightGrey text-black lg:hidden"
      >
        {isOpen ? "Close Filters" : "Open Filters"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white border shadow-md transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 p-6 z-40`}
      >
        {/* Product Type */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg text-gray-800">Product type</h3>
          <div className="space-y-2">
            {[
              "Furniture",
              "Homeware",
              "Sofas",
              "Light fittings",
              "Accessories",
            ].map((item) => (
              <label key={item} className="flex items-center gap-3 mt-3">
                <input
                  type="checkbox"
                  checked={filters.productType === item}
                  onChange={() => handleFilterChange("productType", item)}
                  className="accent-DarkPrimary"
                />
                <span className="text-gray-700">{item}</span>
              </label>
            ))}
          </div>

          {/* Price */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg text-gray-800">Price</h3>
            <div className="space-y-2">
              {["0 - 100", "101 - 250", "250 +"].map((item) => (
                <label key={item} className="flex items-center gap-3 mt-3">
                  <input
                    type="radio"
                    name="price"
                    checked={filters.price === item}
                    onChange={() => handleFilterChange("price", item)}
                    className="accent-DarkPrimary"
                  />
                  <span className="text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Designer */}
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mt-3">
              Designer
            </h3>
            <div className="space-y-2">
              {["Robert Smith", "Liam Gallagher"].map((item) => (
                <label key={item} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={filters.designer === item}
                    onChange={() => handleFilterChange("designer", item)}
                    className="accent-DarkPrimary"
                  />
                  <span className="text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-30 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Static Sidebar for Large Devices */}
      <div className="hidden lg:block w-64 p-6 shadow-md rounded-lg h-full">
        <div>
          {/* Product Type */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg text-gray-800">
              Product type
            </h3>
            <div className="space-y-2">
              {[
                "Furniture",
                "Homeware",
                "Sofas",
                "Light fittings",
                "Accessories",
              ].map((item) => (
                <label key={item} className="flex items-center gap-3 mt-3">
                  <input
                    type="checkbox"
                    checked={filters.productType === item}
                    onChange={() => handleFilterChange("productType", item)}
                    className="accent-DarkPrimary"
                  />
                  <span className="text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg text-gray-800">Price</h3>
            <div className="space-y-2">
              {["0 - 100", "101 - 250", "250 +"].map((item) => (
                <label key={item} className="flex items-center gap-3 mt-3">
                  <input
                    type="radio"
                    name="price"
                    checked={filters.price === item}
                    onChange={() => handleFilterChange("price", item)}
                    className="accent-DarkPrimary"
                  />
                  <span className="text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Designer */}
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Designer</h3>
            <div className="space-y-2">
              {["Robert Smith", "Liam Gallagher"].map((item) => (
                <label key={item} className="flex items-center gap-3 mt-3">
                  <input
                    type="checkbox"
                    checked={filters.designer === item}
                    onChange={() => handleFilterChange("designer", item)}
                    className="accent-DarkPrimary"
                  />
                  <span className="text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
