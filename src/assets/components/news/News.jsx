import React from "react";
import { Section } from "./styled";

const News=()=>{
   return (
     <Section id="news">
       <h2>News & Feeds</h2>
       <span>Where you can earn crypto</span>
       <div className="group-box">
          <div className="box">
            <img src="./img/blog1.png" alt="" />
            <span>31 Jan, 2021</span>
           <p>Rightmove Now Offering Click to Purchase Option
            Rightmove is now offering an option that enables buyers of selected commercial properties the option to submit offers and digitally exchange contracts online.</p>
          </div>
          <div className="box">
          <img src="./img/blog2.png" alt="" />
            <span>31 Jan, 2021</span>
           <p>Rightmove Now Offering Click to Purchase Option
            Rightmove is now offering an option that enables buyers of selected commercial properties the option to submit offers and digitally exchange contracts online.</p>
          </div>
          <div className="box">
          <img src="./img/blog3.png" alt="" />
            <span>31 Jan, 2021</span>
           <p>Rightmove Now Offering Click to Purchase Option
            Rightmove is now offering an option that enables buyers of selected commercial properties the option to submit offers and digitally exchange contracts online.</p>
          </div>
       </div>
     </Section>
   )
}

export default News