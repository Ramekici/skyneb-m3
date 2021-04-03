import React from 'react';
import './Orderbook.scss';


export default function Orderbook() {

    const dataUpper = [
        { id: "upperdata01", price: 0.22552, amount: 1.253415, total: 15.27648 },
        { id: "upperdata02", price: 0.22552, amount: 1.253415, total: 15.27648 },
        { id: "upperdata03", price: 0.22552, amount: 1.253415, total: 15.27648 },
        { id: "upperdata04", price: 0.22552, amount: 1.253415, total: 15.27648 },
        { id: "upperdata05", price: 0.22552, amount: 1.253415, total: 15.27648 },
        { id: "upperdata06", price: 0.22552, amount: 1.253415, total: 15.27648 },
        { id: "upperdata07", price: 0.22552, amount: 1.253415, total: 15.27648 },
        { id: "upperdata08", price: 0.22552, amount: 1.253415, total: 15.27648 },
    ]

    const dataLower = [
        { id: "upperdata09", price: 0.22552, amount: 1.253415, total: 15.27648 },
        { id: "upperdata10", price: 0.22552, amount: 1.253415, total: 15.27648 },
        { id: "upperdata11", price: 0.22552, amount: 1.253415, total: 15.27648 },
        { id: "upperdata12", price: 0.22552, amount: 1.253415, total: 15.27648 },
        { id: "upperdata13", price: 0.22552, amount: 1.253415, total: 15.27648 },
        { id: "upperdata14", price: 0.22552, amount: 1.253415, total: 15.27648 },
        { id: "upperdata15", price: 0.22552, amount: 1.253415, total: 15.27648 },
        { id: "upperdata16", price: 0.22552, amount: 1.253415, total: 15.27648 },
    ]

    return (
        <div className="order-book bg-dark">
            <h3 className="order-book-title bg-primary"> OrderBook </h3>
            <table className="order-book-table">
                <table className="order-book-row">
                    <table className="order-book-column">
                        Price(BTC)
                    </table>
                    <table className="order-book-column">
                        Amount(ETH)
                    </table>
                    <table className="order-book-column">
                        Total(ETH)
                    </table>
                </table>
                {dataUpper.map((item, i) =>
                    <table className="order-book-row">
                        <table className="order-book-column text-red">
                            {item.price}
                        </table>
                        <table className="order-book-column">
                            {item.amount}
                        </table>
                        <table className="order-book-column">
                            {item.total}
                        </table>
                    </table>
                )}
                <table className="order-book-row">
                    <table className="order-book-column">
                        <div> Last Price </div>
                        <div> 0.020367 </div>
                    </table>
                    <table className="order-book-column">
                        <div> USD </div>
                        <div> 148.65 </div>
                    </table>
                    <table className="order-book-column">
                        <div> Change </div>
                        <div> -0.51% </div>
                    </table>
                </table>
                {dataLower.map(item =>
                    <table className="order-book-row">
                        <table className="order-book-column text-green">
                            {item.price}
                        </table>
                        <table className="order-book-column">
                            {item.amount}
                        </table>
                        <table className="order-book-column">
                            {item.total}
                        </table>
                    </table>
                )}
            </table>
        </div>
    )
}
