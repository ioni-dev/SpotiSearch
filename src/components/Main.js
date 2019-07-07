import React from 'react';
import Search from './Search';
import Songs from './Songs';
import '../styles/Main.css';
// This is my approach to separate each component
const Main = (props) => {
    const { onSearch, onSearchChange, searchField, tracksAvailable, onPageChange } = props;
    return (
        <div className='container'>
            <Search onSearch={onSearch} onSearchChange={onSearchChange} searchField={searchField} />
            <Songs tracksAvailable={tracksAvailable} onPageChange={onPageChange} />
        </div>
    )
}
export default Main;