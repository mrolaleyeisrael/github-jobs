import React from 'react'
import Image from 'next/image'
import samplePicture from '@/public/samplePicture.webp'
import { FaGlobeAfrica } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";

const JobCard = () => {
  return (

    <div className=' bg-white shadow-lg rounded p-3 flex items-center '>
      <Image src={samplePicture} alt='sample picture' className=' object-cover h-[100px] w-[100px] shrink-0  rounded-md ' />

      <div className=' ml-4 flex flex-col md:flex-row md:justify-between grow '>
        <div className=' text-[#334680] flex flex-col '>
          <p className=' text-xs font-bold  ' >Company Name</p>
          <h1 className=' font-normal text-lg mt-2 mb-3  ' >Front-End Software Engineer</h1>

          <p className=' border rounded border-[#334680] w-fit text-xs  px-2 py-[6px] '>Job Duration</p>

        </div>

        <div className=' flex gap-7 items-end '>
          <div className=' flex gap-[6px] items-center '>
            <MdLocationOn className='  text-[#b9bdcf] h-6 w-6  ' />
            <p className=' text-[#B9BDCF] '>Job Location</p>
          </div>

          <div className=' flex gap-[6px] items-center '>
            <CiClock2 className='  text-[#b9bdcf] h-6 w-6  ' />
            <p className=' text-[#B9BDCF] '>Day Posted</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default JobCard