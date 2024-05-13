import React from "react";
import "./year.css";
import FeaturedInfo from "../../components/home/FeaturedInfo";
import Chart from "../../components/home/Chart";

export default function Year() {
  return (
    <div className="year_home">
      <div className="year_container">
        <FeaturedInfo
          title="Year Revenue"
          revenue="100원 "
          comparedToYesterday="-100원"
        />
        <FeaturedInfo
          title="Beverage"
          revenue="2잔"
          comparedToYesterday="+2잔"
        />
      </div>
      <Chart />
    </div>
  );
}