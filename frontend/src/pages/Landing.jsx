import React from 'react';
import Button from '@mui/material/Button';
import Navbar from './Navbar';
import { Link} from 'react-router-dom'


export default function Landing() {
  return (
    <div className=" min-h-screen" >
      <div className="grid grid-cols-1">
        <Navbar />
      </div>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 '>
        <div className='mt-24 ml-20 sm:text-center' >
          <h2 className='text-6xl font-semibold  space-x-4 text-slate-800'><strong className='text-orange-500'>Connect</strong>  With Your<br /> Loved Ones </h2>
          <p className=' mt-4  text-slate-800 '>Cover a Distance by WEB TALK</p>
          <Button
            variant="contained"
            style={{marginTop:"20px"}}
            sx={{
              backgroundColor: '#F97316', // Tailwind's orange-500 hex color
              '&:hover': {
                backgroundColor: '#EA580C', // Tailwind's orange-600 hex color for hover
              },
            }}
          > <Link to={"/auth"}>Get Started</Link></Button>
          </div>

        <div className='flex justify-center'>
          <img src="/mobile.png" className='mt-16 p-4 ' alt="" />
        </div>
      </div>
    </div>

  );
}
