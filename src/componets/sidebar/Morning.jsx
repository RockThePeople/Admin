import React from "react";
import "./morning.css";
import FeaturedInfo from "../../components/home/FeaturedInfo";
import Chart from "../../components/home/Chart";

export default function Morning() {
  return (
    <div className="morning_home">
        
      <div className="morning_container">
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