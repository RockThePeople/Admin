import React from "react";
import './home.css';
import FeaturedInfo from "./FeaturedInfo";
import Chart from "./Chart";
import Sidebar from './Sidebar';
import Newmember from "./Newmember";
import Request from "./Request";

export default function Home() {
    return (
    <div className="homeWidgets"> 
        <Newmember  
            name1 = "Anna"
            job1="Electronic Engineering"  
            name2 = "Tom"
            job2="Soft Engineering" 
            name3 = "Tony"
            job3 = "Management"
        />

        <Request
            name1="Susan"
            date1="2 Jun 2024"
            menu1="Americano"
            status1="Declined"
            name2="Dayun"
            date2="3 Jun 2024"
            menu2="Latte"
            status2="Approved"
            name3="Daehong"
            date3="4 Jun 2024"
            menu3="Coldbrew"
            status3="Panding"
            name4="Dweb"
            date4="5 Jun 2024"
            menu4="Black Tea"
            status4="Approved"
             />
    </div>
    )
}

<FeaturedInfo
          title="Today Revenue"
          revenue="200,000원 "
          comparedToYesterday="-11,000원"
        />