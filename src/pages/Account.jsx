import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
      <img className=' w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/bff5732c-7d13-45d1-9fab-476db25a1827/46bc87cd-4c4c-4485-8b93-d5f21c581d56/IN-en-20230710-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
          <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
          </div>
      </div>
      <SavedShows/>
    </>
  )
}

export default Account