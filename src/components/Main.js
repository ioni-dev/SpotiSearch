import React from 'react';
import Search from './Search';
import Songs from './Songs';
import '../styles/Main.css';

const Main = (props) => {
    const { onSearch, onSearchChange, searchField, tracksAvailable } = props;
    return (
        <div className='container'>
            <Search onSearch={onSearch} onSearchChange={onSearchChange} searchField={searchField} />
            <Songs tracksAvailable={tracksAvailable} />
        </div>
    )
}
export default Main;