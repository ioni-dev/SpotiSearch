import React from 'react';
import '../styles/Main.css'


const Search = (props) => {
    const { onSearch, onSearchChange, searchField } = props;
    return (
        <div className='searchBar'>
            <input type="text" className='search-box' placeholder='what do you want to search today?' onChange={onSearchChange} />
            <button type='submit' className='search-btn' onClick={() => onSearch(searchField)}>Search</button>
        </div>
    )
}

export default Search;