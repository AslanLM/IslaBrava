import React from 'react'
import Hero from './Hero'
import BestSellers from './BestSellers'
import Info from './Info'
import NewProducts from './NewProducts'
import PreFooter from './PreFooter'

const Landing = () => {
  return (
    <>
    <Hero/>
    <main>
    <BestSellers/>
    <Info/>
    <NewProducts/>
    <PreFooter/>
    </main>
    </>
  )
}

export default Landing