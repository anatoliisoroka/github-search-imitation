import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
// src
import './style.scss';

function SearchInput({ defaultValue, onSearch, ...props }) {
    const [inputValue, setInputValue] = useState(defaultValue || '')

    const onChange = event => {
        const { value } = event.target
        setInputValue(value)
        onSearch(value)
    }

    return (
        <div className='search-input'>
            <p>Search Github Users</p>
            <label>
                <FaSearch />
                <input 
                    type="text"
                    className="github-search-input"
                    value={inputValue}
                    onChange={onChange}
                    {...props}
                />
            </label>
        </div>
    )
}

export default SearchInput
