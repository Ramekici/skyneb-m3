import React from 'react';
import './Left-pane.scss';
import Star from './Star';
import Search from './Search';
import Button from '../commons/Button';

export default function LeftPaneUp() {

    const data = [
        {id: 1, pairs:"ETC/BTC", lastPrice:0.0000324, change:-2.54 },
        {id: 2, pairs:"KCS/BTC", lastPrice:0.0000123, change: 2.54 },
        {id: 3, pairs:"ETC/BTC", lastPrice:0.0000324, change:-2.54 },
        {id: 4, pairs:"KCS/BTC", lastPrice:0.0000123, change: 6.7 },
        {id: 5, pairs:"ETC/BTC", lastPrice:0.0000324, change:-2.54 },
        {id: 6, pairs:"KCS/BTC", lastPrice:0.0000123, change: 2.11 },
        {id: 7, pairs:"ETC/BTC", lastPrice:0.0000324, change:-1.23 },
        {id: 8, pairs:"KCS/BTC", lastPrice:0.0000123, change: 2.54 },
        {id: 9, pairs:"ETC/BTC", lastPrice:0.0000324, change:-2.54 },
        {id: 10, pairs:"KCS/BTC", lastPrice:0.0000123, change: 2.54 },
        {id: 11, pairs:"ETC/BTC", lastPrice:0.0000324, change:-2.54 },
        {id: 12, pairs:"KCS/BTC", lastPrice:0.0000123, change: 2.54 },
        {id: 13, pairs:"ETC/BTC", lastPrice:0.0000324, change:-2.54 },
        {id: 14, pairs:"KCS/BTC", lastPrice:0.0000123, change: 2.54 },
        {id: 15, pairs:"ETC/BTC", lastPrice:0.0000324, change:-2.54 },
        {id: 16, pairs:"KCS/BTC", lastPrice:0.0000123, change: 2.54 },
        {id: 17, pairs:"KCS/BTC", lastPrice:0.0000123, change: 2.54 },
        {id: 18, pairs:"ETC/BTC", lastPrice:0.0000324, change:-2.54 },
        {id: 19, pairs:"KCS/BTC", lastPrice:0.0000123, change: 2.54 },
        {id: 20, pairs:"ETC/BTC", lastPrice:0.0000324, change:-2.54 },
        {id: 21, pairs:"KCS/BTC", lastPrice:0.0000123, change: 2.54 },
        {id: 22, pairs:"ETC/BTC", lastPrice:0.0000324, change:-2.54 },
        {id: 23, pairs:"KCS/BTC", lastPrice:0.0000123, change: 2.54 },
    ]
    return (
        <div className="left-pane-up bg-dark">
            <Search/>
            <table className="left-pane-table-up">
                <Star/>
                <Button name="BTC" className="active"/>
                <Button name="ETH"/>
                <Button name="NEO"/>
                <Button name="USDT"/>
                <Button name="DAI"/>
                <Button name="PAX"/>
            </table>
            <table className="left-pane-table">
                <table className="left-pane-row">
                    <table className="left-pane-column text-muted">
                        Pairs
                    </table>
                    <table className="left-pane-column text-muted">
                        Last Price
                    </table>
                    <table className="left-pane-column text-muted">
                        Change
                    </table>
                </table>
                {data.map(item => 
                    <table className="left-pane-row" key={item.id}>
                        <Star/>
                        <table className="left-pane-column">
                            {item.pairs}
                        </table>
                        <table className="left-pane-column">
                            {item.lastPrice}
                        </table>
                        <table className="left-pane-column">
                            <span style={item.change > 0 ? {color: "#1DC34B"}: {color: "#F7241E"}}> {item.change} </span>
                        </table>
                    </table>
                )}

            </table>
        </div>
    )
}
