import React from "react";
import ImgCard from "./ImgCard";
import MetaMaskIcon from "../../../img/icons/MetaMask_Fox.svg";
import Mintimg from "../../../img/icons/nft-icon.svg";
import Upload from "../../../img/icons/nftcollection.svg";
import Happycustomer from "../../../img/icons/happy-svgrepo-com.svg"
const middleSection = () => {
  const Desc = (p) => {
    return (
      <div className="Desc">
        <div /*style={{ backgroundColor: p.color }}*/ className="DescImgDiv">
          <img className="DescImg" src={p.img} alt="" />
        </div>
        <div className="flexdivvv">
          <h2>{p.header}</h2>
          <p>{p.desc}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="oneHunpx">
      <div className="description">
        <h1>Best Feature For Youuu</h1>
        <p>
          Get nice NFTs are hot topic in thee world of technology, as more and
          more of these find their way to the limelight
        </p>
      </div>
      <div className="ImgCardWrapper">
        <ImgCard />
        <div className="DescDiv">
          <Desc
            img={MetaMaskIcon}
            header="metamusk pairing"
            desc="pair with metamusk and handle your transcation"
            color="lime"
          />
          <Desc
            img={Mintimg}
            header="Quick NFT transactions"
            desc=" We facilitate fast and efficient NFT transactions"
            color="lime"
          />
          <Desc
            img={Upload}
            header="Easily minting NFTs"
            desc=" Easily mint NFTs with Tokmart.
            "
            color="lime"
          />
          <Desc
            img={Happycustomer}
            header="User-friendly interface"
            desc="our user-friendly interface is easy to navigate."
            color="lime"
          />
        </div>
      </div>
    </div>
  );
};

export default middleSection;
