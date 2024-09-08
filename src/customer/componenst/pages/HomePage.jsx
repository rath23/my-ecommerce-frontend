import React from 'react'
import MainCarousel from '../HomeCarousel/MainCarousel'
import ItemCarousel from '../ItemCarousel/ItemCarousel'
import { mens_kurta } from '../../../Data/mens/mens_kurta'

export default function HomePage() {
  return (
    <>
        <MainCarousel/>
        <div className='my-5 py-[2rem] flex flex-col justify-center '>
        <ItemCarousel data={mens_kurta} title={"Men's Kurta"}/>
        <ItemCarousel data={mens_kurta} title={"Men's Jeans"}/>
        <ItemCarousel data={mens_kurta} title={"Men's Shirt"}/>
        <ItemCarousel data={mens_kurta} title={"Woman's Saree"}/>
        <ItemCarousel data={mens_kurta} title={"Women's Top"}/>

        </div>
    </>
  )
}
