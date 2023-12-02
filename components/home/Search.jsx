import React from 'react'
import Image from 'next/image'
import { TbBriefcase2 } from "react-icons/tb";
import bgImage from '@/public/bgImage.jpg'

const Search = () => {
  return (
    <div className=' py-10 relative w-full '>
      <Image src={bgImage} alt='background Image' className=' object-cover h-full absolute top-0 w-full rounded-md ' />

      <div className=' md:w-[790px] mx-2 relative md:mx-auto flex p-1 bg-white items-center rounded-[4px]  '>
        <TbBriefcase2 className=' h-5 w-5 md:h-6 md:w-6  text-[#b9bdcf] ml-4  ' />
        <input type="text" className=' grow w-auto flex-wrap placeholder:text-[#b9bdcf] placeholder:text-xs outline-none  ml-2 text-[#999] ' placeholder='Title, companies, expertise or benefits' />
        <button className=' rounded-[4px] text-white text-xl bg-[#1e86ff] px-8 md:px-10 py-2 md:py-3 shrink-0  ' >Search</button>

      </div>
    </div>  )
}

export default Search