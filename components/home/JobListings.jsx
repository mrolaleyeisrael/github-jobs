import React from 'react'
import JobCard from './JobCard'
const JobListings = () => {
  return (

    <div>
      <div className=' flex flex-col gap-6 md:gap-8 w-full'>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />

      </div>
    </div>
  )
}

export default JobListings