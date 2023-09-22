import React from 'react'

const NewsLetter = () => {
  return (
    <div className='max-w-[1520] m-auto text-white px-4 bg-[#24362b]'>
        <div className='mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-2'>
                <h1>
                    Need advice
                </h1>
                <p>
                    Sign Up
                </p>

            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex items-center justify-between w-full'>
                    <input type='email' placeholder='Email' className='p-3 flex w-full rounded-md text-black'></input>
                    <button className='bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 border-none'>Notify Me</button>

                </div>

            </div>

        </div>
    </div>
  )
}

export default NewsLetter