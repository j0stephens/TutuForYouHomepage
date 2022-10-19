import React from 'react'

const Footer = () => {
  return (
    <div className='pt-5'>
        <div className='flex justify-center'>
            <p className='text-[#d7c4a1]'>Copyright 2022 &nbsp;</p>
            <p className='text-[#bfa26a]'>Tutu For You. &nbsp;</p>
            <p className='text-[#d7c4a1]'>All Rights Reserved.</p>
        </div>
        <div>
            <ul className='flex justify-center text-[#bfa26a]'>
                <li>Home</li>
                <li>About Us</li>
                <li>Terms and Conditions</li>
                <li>Portal</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer