import React from "react";
import "./month.css";
import FeaturedInfo from "../../components/home/FeaturedInfo";
import Chart from "../../components/home/Chart";
import Sidebar from "../../components/home/Sidebar";

export default function Month() {
  return (
    <div className="month_home">
      <div className="month_container">
        <FeaturedInfo
          title="Month Revenue"
          revenue="1,000원 "
          comparedToYesterday="-21,000원"
        />
        <FeaturedInfo
          title="Beverage"
          revenue="1잔"
          comparedToYesterday="-2잔"
        />
      </div>
      <Chart />
    </div>
  );
}
