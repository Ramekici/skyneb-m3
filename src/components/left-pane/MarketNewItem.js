import React from 'react';


export default function MarketNewItem(props) {
    return (
        <div className="market-news">
            <h3 className="market-news-title">
               {props.title} 
            </h3>
            <p className="market-news-parag">
             {props.paragraf}
            </p>
            <div className="market-news-date bg-primary">
            {props.date}
            </div>
        </div>
    )
}
