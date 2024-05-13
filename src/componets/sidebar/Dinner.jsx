import React from "react";
import "./dinner.css";
import FeaturedInfo from "../../components/home/FeaturedInfo";
import Chart from "../../components/home/Chart";

export default function Dinner() {
  return (
    <div className="dinner_home">
      <div className="dinner_container">
        <FeaturedInfo
          title="Today Revenue"
          revenue="200,000원 "
          comparedToYesterday="-11,000원"
        />
        <FeaturedInfo
          title="Beverage"
          revenue="50잔"
          comparedToYesterday="+2잔"
        />
      </div>
      <Chart />
    </div>
  );
}