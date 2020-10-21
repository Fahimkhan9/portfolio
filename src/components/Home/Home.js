import React from 'react'
import HeaderMain from './HeaderMain'
import Navigation from './Navigation'
import Products from './Products'

function Home() {
    return (
        <div>
            <Navigation/>
            <HeaderMain/>
            <Products/>
        </div>
    )
}

export default Home
