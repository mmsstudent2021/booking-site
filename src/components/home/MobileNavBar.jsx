import React from 'react'
import { BsBriefcase, BsHouseDoor, BsPercent, BsPersonCircle } from 'react-icons/bs'

const MobileNavBar = () => {
  return (
    <>
        <section className='fixed bottom-0 z-[100] w-full px-8 py-3 bg-white shadow-[0 1rem 3rem rgba(29, 58, 83, 0.5)] rounded-t-2xl md:hidden dark:bg-dark'>
        <div className="flex justify-between items-center">
            <a href="" className='inline-flex flex-col items-center gap-y-1 text-xs text-blue-500 dark:text-blue-300'>
                <BsHouseDoor className='text-xl' />
                Home
            </a>
            <a href="" className='inline-flex flex-col items-center gap-y-1 text-xs text-gray-500 dark:text-gray-400'>
                <BsBriefcase className='text-xl' />
                My Trips
            </a>
            <a href="" className='inline-flex flex-col items-center gap-y-1 text-xs text-gray-500 dark:text-gray-400'>
                <BsPercent className='text-xl' />
                Offer
            </a>
            <a href="" className='inline-flex flex-col items-center gap-y-1 text-xs text-gray-500 dark:text-gray-400'>
                <BsPersonCircle className='text-xl' />
                Account
            </a>
        </div>
    </section>
    <div className="h-[64px] bg-black md:hidden"></div>
    </>
  )
}

export default MobileNavBar