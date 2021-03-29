import React from "react";

import Logo from "../assets/img/logo.png";
import BondImage1 from "../assets/img/bond1.png";
import BondImage2 from "../assets/img/bond2.png";
import VCashCoin from "../assets/img/v-cash-coin.png";
import CoinIcon from "../assets/img/coin-icon.png";
const DappBlack: React.FC = () => {
    return (
        <div className="dapp dapp-black">
            <header className="header">
                <div className="container py-3 d-flex justify-content-between flex-column flex-md-row">
                    <div className="logo">
                        <img src={Logo} alt="BNB" />
                    </div>
                    <div className="wallet-info d-flex flex-column flex-md-row justify-content-between align-items-end align-items-md-center">
                        <div className="wallet-info-item text-md-left text-right">
                            <span>BNB IN WALLET</span>
                            <p className="font-weight-bold">3.23321</p>
                        </div>
                        <div className="wallet-info-item text-md-left text-right">
                            <span>V-BONDS IN WALLET</span>
                            <p className="font-weight-bold">24</p>
                        </div>
                        <div className="wallet-info-item text-md-left text-right">
                            <span>V-CASH IN VAULT</span>
                            <p className="font-weight-bold">13</p>
                        </div>
                        <div className="wallet-info-item">
                            <button className="btn btn-secondary">
                                CONNECT WALLET
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="container">
                    <section className="v-cash-section">
                        <p className="text-white">Buy <strong>V-Bonds</strong> to become a Bondholder and start earning <strong>V-Cash</strong> (V-Cash can be exchanged for BNB)</p>
                        <div className="form-group d-flex flex-md-row flex-column w-100 justify-content-between m-0">
                            <div className="d-flex align-items-center flex-md-row flex-column w-100 w-md-75">
                                <div className="amount-input-box">
                                    <input type="text" className="amount-input" />
                                    <span className="font-weight-bold">BNB</span>
                                </div>
                                <p className="text-white m-0 ml-2">Receive <strong>0.0000 V-Bonds</strong></p>
                            </div>
                            <button className="btn btn-secondary btn-block w-100 w-md-25">Buy V-Bonds</button>
                        </div>
                    </section>
                    <section className="wallet-section">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="wallet-card">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="wallet-card-info">
                                                <h6 className="text-white font-weight-normal">
                                                    My <strong>24</strong> V-Bonds
                                                </h6>
                                                <img src={BondImage1} alt="" />
                                                <small className="my-2 d-block">Product</small>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <img src={BondImage1} alt="" className="card-background" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="coin-value-bar">
                                                <img src={VCashCoin} alt="" />
                                                <p className="display-4 font-weight-bold text-white m-0 ml-2">
                                                    1
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <small className="text-white d-block pl-5 mt-3">
                                        <strong>V-Cash</strong> per hour.
                                    </small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="wallet-card">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="wallet-card-info">
                                                <h6 className="text-white font-weight-normal">
                                                    My <strong>Vault</strong>
                                                </h6>
                                                <img src={BondImage2} alt="" />
                                                <small className="my-2 d-block">Contains</small>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <img src={BondImage2} alt="" className="card-background" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="coin-value-bar">
                                                <img src={VCashCoin} alt="" />
                                                <p className="display-4 font-weight-bold text-white m-0 ml-2">
                                                    13
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <small className="text-white d-block pl-5 mt-3">
                                        <strong>V-Cash</strong> (10 Hours 43 Minutes until your vault is full)
                                    </small>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="sell-v-cash-section transform-section">                        
                        <p className="text-white">Sell my <strong>13 V-Cash</strong>  and receive 0.432142 BNB<strong>BNB</strong></p>
                        <div className="v-cash-diagram d-flex">
                            <div className="diagram-part d-flex justify-content-between">
                                <img src={VCashCoin} alt="" />
                                <img src={CoinIcon} alt=""/>
                            </div>
                            <button className="btn btn-warning">
                                Sell V-Cash For BOB
                            </button>
                        </div>
                    </section>
                    <section className="transform-v-cash-section transform-section">                        
                        <p className="text-white">Sell my <strong>13 V-Cash</strong>  and receive 0.432142 BNB<strong>BNB</strong></p>
                        <div className="v-cash-diagram d-flex">
                            <div className="diagram-part d-flex justify-content-between">
                                <img src={VCashCoin} alt="" />
                                <img src={BondImage1} alt="" width="60px" />
                            </div>
                            <button className="btn btn-secondary">
                                Sell V-Cash For BOB
                            </button>
                        </div>
                    </section>
                    <section className="log-section">                        
                        <p className="text-white">Bondholders <strong>Leaderboard</strong></p>
                        <p className="text-white mb-1">1. 0xCA1F0623DeC82594a124e20024aFCC7F78B4A56f owns <strong>356</strong> V-Bonds & earns <strong>14.375</strong> V-Cash per hour</p>
                        <p className="text-white mb-1">2. 0xCA1F0623DeC82594a124e20024aFCC7F78B4A56f owns <strong>356</strong> V-Bonds & earns <strong>14.375</strong> V-Cash per hour</p>
                        <p className="text-white mb-1">3. 0xCA1F0623DeC82594a124e20024aFCC7F78B4A56f owns <strong>356</strong> V-Bonds & earns <strong>14.375</strong> V-Cash per hour</p>
                        <p className="text-white mb-1">4. 0xCA1F0623DeC82594a124e20024aFCC7F78B4A56f owns <strong>356</strong> V-Bonds & earns <strong>14.375</strong> V-Cash per hour</p>
                        <p className="text-white mb-1">5. 0xCA1F0623DeC82594a124e20024aFCC7F78B4A56f owns <strong>356</strong> V-Bonds & earns <strong>14.375</strong> V-Cash per hour</p>
                        <p className="text-white mb-1">6. 0xCA1F0623DeC82594a124e20024aFCC7F78B4A56f owns <strong>356</strong> V-Bonds & earns <strong>14.375</strong> V-Cash per hour</p>
                        <p className="text-white mb-1">7. 0xCA1F0623DeC82594a124e20024aFCC7F78B4A56f owns <strong>356</strong> V-Bonds & earns <strong>14.375</strong> V-Cash per hour</p>
                        <p className="text-white mb-1">8. 0xCA1F0623DeC82594a124e20024aFCC7F78B4A56f owns <strong>356</strong> V-Bonds & earns <strong>14.375</strong> V-Cash per hour</p>
                        <p className="text-white mb-1">9. 0xCA1F0623DeC82594a124e20024aFCC7F78B4A56f owns <strong>356</strong> V-Bonds & earns <strong>14.375</strong> V-Cash per hour</p>
                        <p className="text-white mb-1">10. 0xCA1F0623DeC82594a124e20024aFCC7F78B4A56f owns <strong>356</strong> V-Bonds & earns <strong>14.375</strong> V-Cash per hour</p>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default DappBlack;
