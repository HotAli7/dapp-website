import React from "react";
import Logo from "../assets/img/logo.png";

import CoinIcon1 from "../assets/img/coin-icon1.png";
import CoinIcon2 from "../assets/img/coin-icon2.png";
import CoinIcon3 from "../assets/img/coin-icon3.png";
import CoinIcon4 from "../assets/img/coin-icon4.png";
import CoinIcon5 from "../assets/img/coin-icon5.png";
import CoinIcon6 from "../assets/img/coin-icon6.png";
import CoinIcon7 from "../assets/img/coin-icon7.png";
import CoinIcon8 from "../assets/img/coin-icon8.png";
import CoinIcon9 from "../assets/img/coin-icon9.png";
const ComingSoon1: React.FC = () => {
    return (
        <div className="detail coming-soon">
            <header>
                <div className="container py-3 d-flex justify-content-between flex-column flex-md-row">
                    <div className="logo">
                        <img src={Logo} alt="BNB" />
                    </div>                    
                </div>
            </header>
            <div className="container d-flex flex-column align-items-center justify-content-center coming-soon-container">
                <div className="display-4 coming-soon-title">The Longhouse</div>
                <h5 className="font-weight-normal text-center">WORK IN PROGRESS<br />COMING SOON</h5>
                <div className="coin-icon-wrapper">
                    <img src={CoinIcon1} alt=""/>
                    <img src={CoinIcon2} alt=""/>
                    <img src={CoinIcon3} alt=""/>
                    <img src={CoinIcon4} alt=""/>
                    <img src={CoinIcon5} alt=""/>
                    <img src={CoinIcon6} alt=""/>
                    <img src={CoinIcon7} alt=""/>
                    <img src={CoinIcon8} alt=""/>
                    <img src={CoinIcon9} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon1;
