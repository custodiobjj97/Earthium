import React from "react";
import { Footer } from "./styled";


const Foote=()=>{
  return (
   <Footer>
      <div className="contact">
         <img src="./img/logo.png" alt="" />
         <p>From Tron to Narnya, the idea to suddenly be transferred in another world, where you could move, feel, interact and communicate is a recurring theme in books, animes and movies.</p>
         <div className="box-input">
            <input type="text" placeholder="Email" />
            <button className="btn-input">submit</button>
         </div>
      </div>
      <div className="company">
      <h3>Company</h3>
      <ul>
         <li><a href="#">Home</a></li>
         <li><a href="#">Map</a></li>
         <li><a href="#">About</a></li>
         <li><a href="#">News</a></li>
      </ul>
      </div>
      <div className="links">
      <h3>links</h3>
      <ul>
         <li><a href="#">Brochure</a></li>
         <li><a href="#">Company</a></li>
         <li><a href="#">Terms & Conditions</a></li>
         <li><a href="#">Privacy Policy</a></li>
         <li><a href="#">Cookie Policy</a></li>
      </ul>
      </div>
      <div className="contact-2">
      <h3>links</h3>
      <ul>
         <li><a href="#">+01 12344 12354</a></li>
         <li><a href="#">earthium@earthmail.com</a></li>
         <li><a href="#">Milkyway Sector 75, Planet Earth</a></li>
      </ul>
      </div>
      <div className="copy">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, tempora.</p>
      </div>
   </Footer>
  )
}

export default Foote