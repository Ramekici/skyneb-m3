import React from 'react';
import './MiddleTable.scss';


export default function MidTableItem(props) {
    return (
        <div className="item-container">
            <div className="miditem-up bg-primary text-muted">
                <span> Price </span>
                <span style={{ color: "white" }}> BTC </span>
            </div>
            <div className="miditem-up bg-primary text-muted">
                <span> Amount </span>
                <span style={{ color: "white" }}> ETH </span>
            </div>
            <div className="miditem-percentage">
                <span className="bg-primary p-1 mr-1"> 25% </span>
                <span className="bg-primary p-1 mr-1"> 50% </span>
                <span className="bg-primary p-1 mr-1"> 75% </span>
                <span className="bg-primary p-1 mr-1"> 100% </span>
            </div>
                <div className="miditem-center">
                    <div className="available-item">
                        <div> Available: </div>
                        <div> 0 BTC = 0 USD </div>
                    </div>
                    <div className="available-item">
                        <div> Volume: </div>
                        <div> 0 BTC = 0 USD </div>
                    </div>
                    <div className="available-item">
                        <div> Margin: </div>
                        <div> 0 BTC = 0 USD </div>
                    </div>
                    <div className="available-item">
                        <div> Fee: </div>
                        <div> 0 BTC = 0 USD </div>
                    </div>
                </div>
            <div className="miditem-button-con">
                <button type="button" className="miditem-button"
                    style={props.buy ? { backgroundColor: "#27DF81" } : { backgroundColor: "#FF2420" }}>
                    {props.buttonName}
                </button>
            </div>
        </div>
    )
}
