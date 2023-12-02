import Image from 'next/image'
import { TbBriefcase2 } from "react-icons/tb";
import bgImage from '@/public/bgImage.jpg'
import Search from '@/components/home/Search';
import Sorting from '@/components/home/Sorting';
import JobListings from '@/components/home/JobListings';
import NavBar from '@/components/NavBar';


export default function Home() {
  return (
    <div className='md:px-[120px] px-3 relative pb-20  bg-[#f6f7fb] pt-[100px] '>
      {/* search area  */}
      <Search />

      {/* job list */}

      <div className=' grid grid-cols-1 md:grid-cols-4 mt-10  '>
        <div className=''>
          <Sorting />
        </div>

        <div className=' md:col-span-3  '>
          <JobListings />
        </div>



      </div>


    </div>
  )
}
