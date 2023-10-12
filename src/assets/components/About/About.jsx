import React from "react";
import { Section } from "./styled";


const About = ()=>{
  return (
     <Section id="about">
         
         <div className="about-image">
           <img src="./img/buy-sell-1.png" alt="" />
         </div>

         <div className="about-text1">
           <h2>Buy and Sell Virtual<br/> 
           <span className="color">Lands</span> and <br/>
           <span className="color">Properties</span></h2>
         </div>
     </Section>
  )
}

export default About