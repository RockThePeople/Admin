import React from "react";
import './home.css';
import FeaturedInfo from "./FeaturedInfo";
import Chart from "./Chart";
export default function Home(){
    return <div className="home">
        <FeaturedInfo />
        <Chart />
    </div>
}