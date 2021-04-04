import React from 'react'
import Button from '../commons/Button'

export default function Orders() {

    const items = [
        { id: "item01", name: "Time" },
        { id: "item02", name: "All Pairs" },
        { id: "item03", name: "All Types" },
        { id: "item04", name: "Buy/Sell" },
        { id: "item05", name: "Price" },
        { id: "item06", name: "Amount" },
        { id: "item07", name: "Executed" },
        { id: "item08", name: "UnExecuted" }
    ]

    return (
        <div className="orders bg-dark">
            <div className="table-row bg-primary" style={{ justifyContent: "flex-start" }}>
                <Button name="Open orders" className="active" />
                <Button name="Closed orders" />
                <Button name="Order history" />
                <Button name="Balance" />
            </div>
            <div className="table-row">
                {items.map(item =>
                    <div className="table-column text-muted" key={item.id}>
                        {item.name}
                    </div>
                )}
            </div>
        </div>
    )
}
