import React, {useState} from 'react';

import './Search.scss';
import SearchSvg from '../commons/SearchSvg';

export default function Search() {

    const [searchData, setSearchData] = useState('');

    const onChangeHandler = (event) => {
        setSearchData(event.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(searchData);
    }
    

    return (
        <form className="search-container" onSubmit={onSubmitHandler}>
            <div className="svg">
                <SearchSvg/>
            </div>
            <div className="input-group">
                <input 
                type="text" 
                value={searchData}
                onChange={onChangeHandler}
                placeholder="Search"
                className="input-search"/> 
            </div>
           
        </form>
    )
}
