import React from 'react'
import HeaderMain from './HeaderMain'
import Navigation from './Navigation'
import Products from './Products'

function Home({cart}) {
    return (
        <div>
            <Navigation cart={cart}/>
            <HeaderMain/>
            <Products/>
        </div>
    )
}

export default Home
