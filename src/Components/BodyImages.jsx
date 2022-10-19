import React from 'react';
import heroOne from '../Assets/Hero1.jpeg';
import heroTwo from '../Assets/Hero2.jpeg';

const BodyImages = () => {
  return (
    <div className='flex justify-center md:px-3'>
        <div className='md:grid md:grid-cols-2'>
            <div>
                <img className='mx-auto md:border-2 border-black' src={heroOne} alt="/" />
            </div>
            <div>
                <img className='mx-auto md:border-2 border-black' src={heroTwo} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default BodyImages