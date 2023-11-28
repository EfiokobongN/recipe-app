import React from 'react'

import './Main.scss'
import SearchItem from '../recipe_addItem/SearchItem'
import Hero from '../recipe_hero/Hero'
import Items from '../recipe_items/Items'


function Main() {
  return (
    <main>
      <SearchItem />
      <Hero />
      <Items />
    </main>
  )
}

export default Main
