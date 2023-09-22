import React from 'react'
import { mealData } from '../data/data'
import {ArrowSmRightIcon} from "@heroicons/react/outline"
import { useState } from 'react'


const Meal = () => {
    const[foods,setfood]=useState(mealData);
    const filterfood=(category)=>{
        setfood(mealData.filter((item)=>{
            return item.category===category;
        })
            )

    }
  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
        <h1 className='text-orange-500 font-bold text-xl text-center py-2'>
            Our Meals
    </h1>
    <div className='flex flex-col lg:flex-row justify-center'>
        <div className='flex justify-center md:justify-center '>
            <button onClick={()=>setfood(mealData)} className='m-1 border-orange-300'>All</button>
            <button onClick={()=>filterfood("pizza")} className='m-1 border-orange-300'>Pizza</button>
            <button onClick={()=>filterfood("chicken")} className=' m-1 border-orange-300'>Chicken</button>
            <button onClick={()=>filterfood("salad")} className='m-1 border-orange-300'>Salad</button>

        </div>

    </div>
    <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6'>
        {
            foods.map((item)=>{
                return(
                <div key={item.id} className="border-none hover:scale-105 duration-300">
                    <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-3xl'></img>
                     <div className='flex justify-between py-2 px-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p className='bg-amber-400 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 '>
                            {item.price}
                        </p>
                        </div>
                        <div className='pl-2 py-4'>
                            <p className='flex items-center text-indigo-600'>View More<ArrowSmRightIcon className='w-5 ml-2'></ArrowSmRightIcon></p>
                        </div>
                </div>
                );
            })
        }

    </div>
    </div>
  )
}

export default Meal