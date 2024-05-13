import React from "react";
import './featuredInfo.css';

export default function FeaturedInfo({title,revenue, comparedToYesterday}){
    return(
        <div className="featured">
            <div className="featuredItem">
                <h3 className="featuredTitle">{title} </h3>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{revenue}</span>
                    <span className="featuredMoneyRate">{comparedToYesterday}</span>
                </div>
                <span className="featureSub">Compared To Yesterday</span>
            </div>
        </div>
             
    )
}