import React from 'react';
import MarketNewItem from './MarketNewItem';
import './MarketNews.scss';


export default function MarketNews() {
    
    return (
        <div className="market-news-container bg-dark" style={{paddingBottom:"0.1rem"}}>
            <h2 className="market-news-up-title bg-primary"> Market News </h2>
            <MarketNewItem
            title="KCS Pay Fees Feature is Coming Soon"
            paragraf="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Curabitur vel ipsum"
            date={"2019-02-08 10:22"}
            />
            <MarketNewItem
            title="KCS Pay Fees Feature is Coming Soon"
            paragraf="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Curabitur vel ipsum"
            date={"2019-02-08 10:22"}
            />
            <MarketNewItem
            title="KCS Pay Fees Feature is Coming Soon"
            paragraf="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Curabitur vel ipsum"
            date={"2019-02-08 10:22"}
            
            />
            <MarketNewItem
            title="KCS Pay Fees Feature is Coming Soon"
            paragraf="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Curabitur vel ipsum"
            date={"2019-02-08 10:22"}
            
            />
        </div>
    )
}
