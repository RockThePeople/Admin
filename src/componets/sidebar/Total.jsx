import React from "react";
import "./total.css";
import FeaturedInfo from "../../components/home/FeaturedInfo";
import Chart from "../../components/home/Chart";

export default function Total() {
  return (
    <div className="total_home">
      <div className="total_container">
        <FeaturedInfo
          title="Total"
          revenue="10,000,000원"
          comparedToYesterday="+20,000원"
        />
        <FeaturedInfo
          title="Beverage"
          revenue="209잔"
          comparedToYesterday="+5잔"
        />
      </div>
      <Chart />
    </div>
  );
}