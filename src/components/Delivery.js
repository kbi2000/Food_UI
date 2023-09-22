import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4' >
    <h3 className='text-orange-500 font-bold text-2xl text-center'>
        Quick Delivery App

    </h3>
    <div  className='w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[550px] mx-auto my-4 ' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp
'></img>
<div className='flex flex-col justify-center'>
    <p className='text-[#76ee3f] font-bold'>
        Get this App
    </p>
    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Try and Enjoy</h1>
    <p>
    Included in Excel 2016 and Powerpoint 2016,
     the new AutoSave feature not only saves your document every few seconds, depending on what you’re doing, it also uses a simple UI to go back through previous versions of file
    </p>

    <button className='bg-black text-[#76ee3f] rounded-full font-medium mx-auto my-6
    md:mx-0 py-3 ' >Get Started</button>

</div>

    </div>

    </div>
  )
}

export default Delivery