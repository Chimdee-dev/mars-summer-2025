import React from 'react'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { Recommend } from '../components/Recommend'
import { Body } from '../components/Body'
import { Products } from './ProductPage'

export const Home = () => {
    return (
        <div>
            <Hero />
            <div className='lg:w-[1296px] w-screen mx-auto'>
                <Services />
                <Recommend />
                <Body />
            </div>
        </div>
    )
}
