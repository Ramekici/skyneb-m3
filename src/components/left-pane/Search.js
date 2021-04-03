import React from 'react';

import './Search.scss';

export default function Search() {
    return (
        <form className="search-container">
            <div className="input-group">
                <input 
                type="text" 
                value="" 
                placeholder="Search"
                className="input-search"/> 

            </div>
           
        </form>
    )
}
