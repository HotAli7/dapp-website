import React from "react";
import ComingSoonLogo from "../assets/img/coming-soon-logo.png";

const ComingSoon2: React.FC = () => {
    return (
        <div className="detail coming-soon coming-soon1">
            <header>
                <div className="container py-3 d-flex justify-content-between flex-column flex-md-row">
                    <div className="logo">
                        <img src={ComingSoonLogo} alt="BNB" />
                    </div>                    
                </div>
            </header>
            <div className="container d-flex flex-column align-items-center justify-content-center coming-soon-container">
                <h5 className="font-weight-normal text-center">WORK IN PROGRESS<br />COMING SOON</h5>
            </div>
        </div>
    );
};

export default ComingSoon2;
