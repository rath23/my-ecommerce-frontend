import React from 'react'
import './ProductCard.css'

function ProductCard(props) {
  return (
    <div className='productCard w-[15rem]  m-3 transition-all cursor-pointer'>
        <div className='h-[16rem]'>
            <img className='w-full h-full object-left-top object-cover' src={props.imageUrl} alt="product" />
        </div>
        <div  className='textPart bg-white p-3'>
            <div>
                <p className='font-bold opacity-80'>{props.brand} </p>
                <p>{props.title}</p>
            </div>
            <div>
            <p className='font-semibold'>{props.discountedPrice}</p>
            <p className='text-sm opacity-60 line-through'>{props.price}</p>
            <p className='text-sm opacity-80 text-green-500'>{props.discountPersent}% off</p>
        </div>
        </div>
     
    </div>
  )
}

export default ProductCard