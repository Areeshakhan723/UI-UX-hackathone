import { Featurescards } from "../constant";
import FeaturesCard from "../component/FeaturesCard";

import React from "react";

const Features = () => {
  return (
    <div className="padding max-container">
      <h1 className="text-center text-black text-[24px]">
        What makes our brand different
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-4 padding-y ">
        {Featurescards.map((cards, index) => (
          <div key={index}>
            <FeaturesCard key={cards.title} {...cards} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
