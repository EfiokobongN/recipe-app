import React from 'react'
import Container from '../components/recipe_container/Container'
import Header from '../components/recipe_header/Header'
import Footer from '../components/recipe_footer/Footer'
import Main from '../components/recip_main/Main'


function Recipe() {
  return (
    <div>
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </div>
  )
}

export default Recipe
