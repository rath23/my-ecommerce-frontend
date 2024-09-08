import React from 'react'

export default function  HomeSectionCard(props) {

  return (
    <div className="cursor-pointer flex flex-col items-center rounded-lg shadow-lg overflow-hidden bg-white w-[15rem] border border-black">
        <div className='w-[11rem] h-[13rem]' >
            <img className='w-full h-full object-cover pt-[1rem] object-top' src={props.imageUrl} alt='mens kurta'/>
        </div>
        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>{props.brand}</h3>
            <p className='mt-2 text-sm text-gray-500'>{props.description}</p>
        </div>
    </div>
  )
}
