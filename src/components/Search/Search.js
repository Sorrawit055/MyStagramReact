import React from 'react'
import './Search.css'
import { ReactComponent as SearchIcon } from '../../images/icons/search.svg'

const Search = (props) => {//ส่งprops ของsubmitHandler มา
  return (
    <form onSubmit={props.submitHandler} className="Search"> 
      <label
        className="Search-label"
        htmlFor="search">
        <input
          id="search"
          name="search"
          placeholder= ""
          type="text"
          className="Search-input"
          ref={props.setSearchInputRef} //ตัวกรอก search
        />
      </label>

      <button
        className="Search-button"
        type="submit">
        <SearchIcon height="24" width="24" />
      </button>
    </form>
  )
}

export default Search