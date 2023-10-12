import React from "react";
import { Section } from "./styled";
const Blog =()=>{
  return (
    <Section>
      <div className="blog-text1">
      <h2>
        Buy and Sell <span className="color">Virtual</span><br/>
        <span className="color">Resources</span> and
        Businesses
      </h2>
      </div>
      <div className="blog-image">
        <img src="./img/buy-sell-2.png" alt="" />
      </div>
    </Section>
  )
}

export default Blog