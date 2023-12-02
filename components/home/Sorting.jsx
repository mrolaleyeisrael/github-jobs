import React from 'react'

const Sorting = () => {
  return (
    <div className=' mr-10 text-[#282538] '>

      <h1 className=' font-bold text-xl '>Filter</h1>
      <h1 className=' font-bold text-sm text-[#b9b8cf] mb-[14px] mt-6 '>Job Type</h1>

      <div className=' flex flex-col gap-1 pl-3 mt-6 '>

        <div className=' flex gap-2 items-center '>
          <input type="checkbox" className=' h-4 w-4' />
          <p className=' text-[#334680] '>Full Time</p>
        </div>

        <div className=' flex gap-2 items-center '>
          <input type="checkbox" className=' h-4 w-4 ' />
          <p className=' text-[#334680] '>Full Time</p>
        </div>

        <div className=' flex gap-2 items-center '>
          <input type="checkbox" className=' w-4 h-4 ' />
          <p className=' text-[#334680] '>Full Time</p>
        </div>
      </div>




      <div className=' flex flex-col gap-2 mt-6 '>
        <h1 className=' font-bold text-sm text-[#b9b8cf] mb-[14px] '>Location</h1>
        <input type="text" placeholder='City, state, zip code or country' className=' border border-[#d1d1d1] rounded-md p-2 outline-none  ' />

        <div className=' pl-3 mt-6 flex gap-4 flex-col  '>
          <div className=' flex items-center '>
            <input type="radio" id="london" name="location" value="london" className=' h-5 w-5  border border-red-500 ' />
            <label for="javascript" className=' pl-2 '>London</label>
          </div>

          <div className=' flex items-center '>
            <input type="radio" id="london" name="location" value="london" className=' h-5 w-5  border border-red-500 ' />
            <label for="javascript" className=' pl-2 '>London</label>
          </div>

          <div className=' flex items-center '>
            <input type="radio" id="london" name="location" value="london" className=' h-5 w-5  border border-red-500 ' />
            <label for="javascript" className=' pl-2 '>London</label>
          </div>

          <div className=' flex items-center '>
            <input type="radio" id="london" name="location" value="london" className=' h-5 w-5  border border-red-500 ' />
            <label for="javascript" className=' pl-2 '>London</label>
          </div>
        </div>




      </div>

    </div>
  )
}

export default Sorting