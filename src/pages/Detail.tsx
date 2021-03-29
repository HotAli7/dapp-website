import React from "react";
import { ProgressBar } from "react-bootstrap";
import Logo from "../assets/img/logo.png";
const Dapp: React.FC = () => {
    return (
        <div className="detail dapp">
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
                    <section className="sell-v-cash-section transform-section v-cash-section">
                        <div className="d-flex align-items-center mb-2 flex-wrap">
                            <p className="text-white w-100 w-md-50">Sell my <strong>13 V-Cash</strong>  and receive 0.432142 BNB<strong>BNB</strong></p>
                            <div className="w-100 w-md-50">
                                <p className="d-flex justify-content-between mb-0"><small>Seed phase. <span className="text-warning">1.5B VALHA.</span></small><small>950,000,000/<span className="text-warning">1,500,000,000 reserved.</span></small></p>
                                <ProgressBar variant="warning" now={60} className="progress-warning" />
                            </div>
                        </div>
                        <div className="v-cash-input">
                            <div className="form-group d-flex flex-md-row flex-column w-100 justify-content-between m-0">
                                <div className="d-flex align-items-center flex-md-row flex-column w-100">
                                    <div className="amount-input-box">
                                        <input type="text" className="amount-input" />
                                        <span className="font-weight-bold">BNB</span>
                                    </div>
                                    <p className="text-white m-0 ml-2">Receive <strong>0.0000 V-Bonds</strong></p>
                                </div>
                                <button className="btn btn-warning btn-block">RESERVE VALHA</button>
                            </div>
                        </div>
                    </section>
                    <section className="transform-v-cash-section transform-section v-cash-section">
                        <div className="d-flex align-items-center mb-2 flex-wrap">
                            <p className="text-white w-100 w-md-50">Sell my <strong>13 V-Cash</strong>  and receive 0.432142 BNB<strong>BNB</strong></p>
                            <div className="w-100 w-md-50">
                                <p className="d-flex justify-content-between mb-0"><small>Pre sale.<span className="text-info"> 3.5B VALHA.</span></small><small>850,000,000/<span className="text-info">3,500,000,000 reserved.</span></small></p>
                                <ProgressBar variant="info" now={25} className="progress-info" />
                            </div>
                        </div>
                        <div className="v-cash-input">
                            <div className="form-group d-flex flex-md-row flex-column w-100 justify-content-between m-0">
                                <div className="d-flex align-items-center flex-md-row flex-column w-100">
                                    <div className="amount-input-box">
                                        <input type="text" className="amount-input" />
                                        <span className="font-weight-bold">BNB</span>
                                    </div>
                                    <p className="text-white m-0 ml-2">Receive <strong>0.0000 V-Bonds</strong></p>
                                </div>
                                <button className="btn btn-secondary btn-block">RESERVE VALHA</button>
                            </div>
                        </div>
                    </section>
                    <section className="transform-v-cash-section transform-section">
                        <p className="text-white">I’ve reserved and will be allowed to claim <small>(you will be allowed to claim you token once the first batch of liquidity is added (at 50% seed phase reserved))</small></p>
                        <div className="d-flex align-items-center flex-md-row flex-column w-100 v-cash-input">
                            <div className="display-4 font-weight-bold text-warning w-100">3,000,000 <span className="h4 font-weight-bold text-white">VALHA</span></div>
                            <button className="btn btn-primary" disabled>CLAIM MY VALHA</button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Dapp;
