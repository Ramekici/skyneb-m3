import React from 'react'
import Button from '../commons/Button'
import RightBottom from './RightBottom'

export default function RightBott() {
    return (
        <div className="bg-dark" style={{paddingRight:"1rem"}}>
            <div className="table-row bg-primary">
                <Button name="Recent Trades"/>
                <Button name="Market Depth" className="active"/>
            </div>
            <RightBottom/>
        </div>
    )
}
