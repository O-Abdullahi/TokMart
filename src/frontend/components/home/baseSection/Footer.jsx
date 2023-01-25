import React from "react";
import "./BaseSection.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>TokMart</h1>
        <p>
          NFT marketplace for buying and selling uniquedigital assets, <br />  powered
          by blockchain technologyand accessible  through <br /> the DApp.
        </p>
      </div>
      <div>
        <ul>
          <h4>Company</h4>
          
          <li><Link to="/">Home</Link></li>
          <li><Link to="/marketplace">Marketplace</Link></li>
          <li><Link to="/list">list</Link></li>
          <li><Link to="/listings">Listings</Link></li>
          <li><Link to="/purchases">Purchases</Link></li>
        </ul>
      </div>
      <div>
        <ul>
          <h4>Developers</h4>
          <li>Abdullahi Olaniyan</li>
          <li><a href="https://github.com/AdinlewaAbraham">Adinlewa Abraham</a> </li>
          <li>Israel Ogunsola</li>
          <li>Kolade Odesanmi</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
