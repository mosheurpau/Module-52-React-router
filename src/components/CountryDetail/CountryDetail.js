import React from "react";
import { useParams } from "react-router-dom";

const CountryDetail = () => {
  const { countryName } = useParams();
  return (
    <div>
      <h1>Country Detail for: {countryName}</h1>
    </div>
  );
};

export default CountryDetail;
