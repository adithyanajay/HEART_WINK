import React from 'react'
import SideHeading from './SideHeading'
import { heart_middle } from '../_assets'
import Image from 'next/image'
import CardFeatures from './CardFeatures'

function Features() {
  return (
    <div className='relative h-screen pt-32'>
        <SideHeading text={"features"} postion={"left"} />
        <div className= " md:block logo w-6/12 max-w-7xl  md:m-0 absolute top-10 left-0  overflow-hidden">
            <Image src={heart_middle} alt="logo" className="w-full" />
        </div>
        <div className="cards w-full flex flex-col items-end h-full space-y-4 gap-10">
    <CardFeatures title="cosmic chemistry" sub_text="adskjf" route="cosmic" />
    <CardFeatures title="SECRET CRUSH DETECTOR" sub_text="adskjf" route="crush" />

</div>

   
    </div>
  )
}

export default Features