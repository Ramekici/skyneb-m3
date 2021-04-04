import React from 'react';
import './Left-pane.scss';
import Star from './Star';
import Search from './Search';
import Button from '../commons/Button';
import {data} from '../datas/leftPane';


export default function LeftPaneUp() {

    
    return (
        <div className="left-pane-up bg-dark">
            <Search/>
            <div className="left-pane-table-up">
                <Star/>
                <Button name="BTC" className="active"/>
                <Button name="ETH"/>
                <Button name="NEO"/>
                <Button name="USDT"/>
                <Button name="DAI"/>
                <Button name="PAX"/>
            </div>
            <div className="left-pane-table">
                <div className="left-pane-row" style={{height:"1.2rem"}}>
                    <div className="left-pane-column" style={{color:"gray"}}>
                        Pairs
                    </div>
                    <div className="left-pane-column" style={{color:"gray"}}>
                        Last Price
                    </div>
                    <div className="left-pane-column" style={{color:"gray"}}>
                        Change
                    </div>
                </div>
                {data.map(item => 
                    <div className="left-pane-row" key={item.id}>
                        <Star/>
                        <div className="left-pane-column">
                            {item.pairs}
                        </div>
                        <div className="left-pane-column">
                            {item.lastPrice}
                        </div>
                        <div className="left-pane-column">
                            <span style={item.change > 0 ? {color: "#1DC34B"}: {color: "#F7241E"}}> {item.change} </span>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}
