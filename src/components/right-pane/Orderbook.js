import React from 'react';
import './Orderbook.scss';
import {dataLower, dataUpper} from '../datas/rightPane'

export default function Orderbook() {


    return (
        <div className="order-book bg-dark">
            <h3 className="order-book-title bg-primary"> OrderBook </h3>
            <div className="order-book-table">
                <div className="order-book-row">
                    <div className="order-book-column">
                        Price(BTC)
                    </div>
                    <div className="order-book-column">
                        Amount(ETH)
                    </div>
                    <div className="order-book-column">
                        Total(ETH)
                    </div>
                </div>
                {dataUpper.map((item, i) =>
                    <div className="order-book-row" key={item.id}>
                        <div className="background-red" style={{width:`${100-((100/dataUpper.length)*(i))-5}%`}}></div>
                        <div className="order-book-column text-red">
                            {item.price}
                        </div>
                        <div className="order-book-column">
                            {item.amount}
                        </div>
                        <div className="order-book-column">
                            {item.total}
                        </div>
                    </div>
                )}
                <div className="order-book-row">
                    <div className="order-book-column">
                        <div> Last Price </div>
                        <div> 0.020367 </div>
                    </div>
                    <div className="order-book-column">
                        <div> USD </div>
                        <div> 148.65 </div>
                    </div>
                    <div className="order-book-column">
                        <div> Change </div>
                        <div> -0.51% </div>
                    </div>
                </div>
                {dataLower.map((item,i) =>
                    <div className="order-book-row" key={item.id}>
                        <div className="background-green" style={{width:`${(100/dataLower.length)*(i+1)-5}%`}}></div>
                        <div className="order-book-column text-green">
                            {item.price}
                        </div>
                        <div className="order-book-column">
                            {item.amount}
                        </div>
                        <div className="order-book-column">
                            {item.total}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
