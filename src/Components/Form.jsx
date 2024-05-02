import React, { useEffect } from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {RiTwitterXFill} from 'react-icons/ri'
import {FaLinkedin} from 'react-icons/fa'
import Aos from 'aos'


const Form = () => {
  

  useEffect(() => {
    Aos.init({
      duration: 3000,

    });
    
  
    return () => {
    
      
    }
  }, [])
  return (
    <>
    <div>
      <div data-aos="flip-left" className='grid lg:grid-cols-2'id='contact' >
        <div className='p-3 bg-slate-800'>
          <h1 className='text-xl font-meduim text-amber-200 py-5'>Contact me</h1>
          <div className='p-4'>
          <label className='font-semibold text-white'>Name:</label>
          <p><input className='w-full h-8 rounded' onChange={(e)=>setName(e.target.value)} type="text" /></p>

          <label className='font-semibold text-white'>Email:</label>
          <p><input className='w-full h-8 rounded'  type="text" /></p>

          <label className='font-semibold text-white'>Company:</label> 
          <p><input className='w-full h-8 rounded'  type="text" /></p>

          <label className='font-semibold text-white'>Messages:</label>
          <p><textarea className='h-40 rounded w-full'></textarea></p>
          <button className='bg-red-500 text-white w-60 h-9 rounded hover:bg-transparent hover:border'>Send Message</button>
          </div>
        </div>
        <div className='bg-slate-800 flex text-2xl p-3 text-center justify-center items-center text-4xl gap-5 text-red-500'>
            <a href="https://github.com/Papiloyaks" className='hover:scale-150' ><AiFillGithub/></a>
          <a href="https://twitter.com/papiloyaks" className='hover:scale-150'><RiTwitterXFill/></a>
          <a href="https://www.linkedin.com/in/yakub-yusuf-618334265/"className='hover:scale-150'><FaLinkedin/></a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Form