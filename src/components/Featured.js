import { useState } from "react"
import React from 'react'
import { BsChevronLeft,BsChevronRight } from "react-icons/bs"
import {RxDotFilled} from 'react-icons/rx' 

const Featured = () => {
    const sliders=[
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
         },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
          },
      
    ]
    const[currentindex,setindex]=useState(0);
    const prevs=()=>{
        const isfirst=currentindex===0
        const newIndex=isfirst?sliders.length-1:currentindex-1
        setindex(newIndex)

    }
    const nexts=()=>{
        const isf=currentindex===sliders.length-1;
        const newin=isf?0:currentindex+1
        setindex(newin)

    }
    const movetoslide=(slideindex)=>{
      setindex(slideindex);
    }
  return (
    <div className="max-w-[1520px] h-[500px] w-full py-4 px-4 relative">
        <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500" style={{backgroundImage:`url(${sliders[currentindex].url})`}}>


      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 cursor-pointer  text-white">
        <BsChevronLeft onClick={prevs}></BsChevronLeft>
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 cursor-pointer  text-white">
        <BsChevronRight onClick={nexts}></BsChevronRight>
      </div>
      <div className="flex top-4 justify-center py-2">
        {
          sliders.map((slidersitem,slideindex)=>{
            <div className="text-2xl cursor-pointer">
              key={slideindex}
              onClick={()=>{
                movetoslide(slideindex)
              }}
              <RxDotFilled className="bg-black"></RxDotFilled>

              </div>

          })
        }

      </div>
    </div>
  );
}

export default Featured