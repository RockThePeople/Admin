import React from "react";
import './featuredInfo.css';

export default function FeaturedInfo(){
    return(
        <div className="featured">
            <div className="featuredItem">
                <h3 className="featuredTitle">Today Revenue </h3>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">200,000원</span>
                    <span className="featuredMoneyRate">-11,000원</span>
                </div>
                <span className="featureSub">Compared To Yesterday</span>
            </div>
             <div className="featuredItem2">
                <h3 className="featuredTitle">Beverage</h3>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">50잔</span>
                    <span className="featuredMoneyRate">+2잔</span>
                </div>
                <span className="featureSub">Compared To Yesterday</span>
            </div>
        </div>
    )
}