import React from "react";
import './home.css';
import FeaturedInfo from "./FeaturedInfo";
import Request from "./Request";
import Accept from "./Accept";

const data_acc = [{ "name": "Susan", "job": "Electronic Engineering", "email": "abcd@inu.ac.kr", "menu": "Americano" },
{ "name": "Dayun", "job": "Soft Engineering", "email": "efgh@inu.ac.kr", "menu": "Latte" }
]

export default function Home() {
    return (
        <div className="home">
            <div className="homeWidgets">
                <Request />
            </div>
            <div className="accept">
                <Accept
                    name1={data_acc[0].name}
                    job1={data_acc[0].job}
                    email1={data_acc[0].email}
                    menu1={data_acc[0].menu}

                    name2={data_acc[1].name}
                    job2={data_acc[1].job}
                    email2={data_acc[1].email}
                    menu2={data_acc[1].menu}
                />
            </div>

            <FeaturedInfo
                title="Today Revenue"
                revenue="200,000원 "
                comparedToYesterday="-11,000원"
            />
        </div>

    )
}
