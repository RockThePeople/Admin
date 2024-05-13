import React from "react";
import "./lunch.css";
import FeaturedInfo from "../../components/home/FeaturedInfo";
import Chart from "../../components/home/Chart";

export default function Lunch() {
  return (
    <div className="lunch_home">
      <div className="lunch_container">
        <FeaturedInfo
          title="Today Revenue"
          revenue="300,000원 "
          comparedToYesterday="+2,000원"
        />
        <FeaturedInfo
          title="Beverage"
          revenue="60잔"
          comparedToYesterday="+4잔"
        />
      </div>
      <Chart />
    </div>
  );
}