import React from 'react';
import MidTableItem from './MidTableItem';
import Button from '../commons/Button';
import './MiddleTable.scss'


export default function MiddleTable() {
    return (
        <div className="mid-table bg-dark">
            <div className="mid-table-upper">
                <Button name="Limit" className="active" />
                <Button name="Market" />
                <Button name="Stop Limit" />
                <Button name="Stop Market" />
            </div>
            <div className="mid-table-bottom">
                <MidTableItem buy={true} buttonName="Buy"/>
                <MidTableItem buttonName="Sell"/>
            </div>
        </div>
    )
}
