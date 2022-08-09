import React from "react";

const HogDetails = ({ hog }) => {
  const { greased, weight, "highest medal achieved": medal } = hog;
  return (
    <div className="description">
      <strong>{greased ? "Greased" : "Non-greased"}</strong>
      <p>
        Highest medal achieved: <strong>{medal}</strong>
      </p>
      <p>
        Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator
        with Thru-the-Door Ice and Water: <strong>{weight}</strong>
      </p>
    </div>
  );
};

export default HogDetails;
