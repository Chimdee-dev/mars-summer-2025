import React from 'react'
import Hero from '../components/Hero'
import Car from '../components/Car'
import { CarListingSection } from '../components/CarListingSection'

export const Home = () => {
  return (
    <div>
        <Hero />
        <CarListingSection />
    </div>
  )
}
