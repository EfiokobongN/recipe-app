import React from 'react'
import './SearchItem.scss';

function SearchItem() {
  return (
    <>
      <section className='search_section'>
        <input className='search_field' type="text" placeholder="Search for a recipe" />
        <button className='search_btn'>Search</button>
      </section>
    </>
  )
}

export default SearchItem
