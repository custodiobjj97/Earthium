import React from "react";
import {BsPerson} from 'react-icons/bs'
import { Section } from "./styled";


const Home =  ()=>{
   return (
     <Section id="home">
          <div className="home-text">
            
          <h1><span className="color">Earthium is a </span><br/>
            real-time <br/>
            stratergic game</h1>
            <p>Where you can earn money, crypto and NFTs by trading land, finding treasures and building businesses. Welcome</p>
            <a href="#" className="btn">Join our discord <BsPerson/></a>
          </div>
          
          <div className="home-image">
             <img src="./img/home.png" alt="" />
          </div>
     </Section>
   )
}

export default Home