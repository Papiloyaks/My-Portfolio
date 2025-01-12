import React, { useEffect } from 'react'
import {BiLogoGit} from 'react-icons/bi'
import {SiHtml5} from 'react-icons/si'
import {DiCss3} from 'react-icons/di'
import {SiBootstrap} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {BiLogoReact} from 'react-icons/bi'
import {AiFillGithub} from 'react-icons/ai'
import { IoLogoFirebase } from "react-icons/io5";
import Aos from 'aos'


const Skills = () => {
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
   <div data-aos="flip-left" id='skills'>
    <h1 className='ms-20 font-medium text-amber-200 py-5  font-mono'>Skills and Tools:</h1>
    <div id='' className='grid lg:grid-cols-4 mx-20 gap-5'>
    <div className='text-3xl rounded-xl bg-slate-800 flex flex-col justify-center items-center hover:bg-slate-400'>
     <div className='text-white mt-2  '><BiLogoGit/></div>
    <div className='text-white text-lg font-semibold'>Git</div>
    </div>
        
     <div className='text-3xl rounded-xl bg-slate-800 flex flex-col justify-center items-center hover:bg-slate-400'>
        <div className='mt-2 text-white'><SiHtml5/></div>
        <div className='text-center text-white text-lg font-semibold'>HTML 5</div>
        </div>

        <div className='text-3xl rounded-xl bg-slate-800 flex flex-col justify-center items-center hover:bg-slate-400'>
        <div className='text-white mt-2'><DiCss3/></div>
        <div className='text-center text-white text-lg font-semibold'>CSS 3</div>
        </div>

        <div className='text-3xl rounded-xl bg-slate-800 flex flex-col justify-center items-center hover:bg-slate-400'>
        <div className='text-white mt-2'><SiBootstrap/></div>
        <p className='text-center text-white text-lg font-semibold'>Bootstrap</p>
        </div>

        <div className='text-3xl rounded-xl bg-slate-800 flex flex-col justify-center items-center hover:bg-slate-400'>
        <div className='mt-2 text-white'><SiTailwindcss/></div>
        <div className='text-center text-white text-lg font-semibold'>Tailwind</div>
        </div>

        <div className='text-3xl rounded-xl bg-slate-800 flex flex-col justify-center items-center hover:bg-slate-400'>
        <div className='text-white mt-2'><SiJavascript/></div>
        <p className='text-center text-white text-lg font-semibold'>Javascript</p>
        </div>

        <div className='text-3xl rounded-xl bg-slate-800 flex flex-col justify-center items-center   hover:bg-slate-400'>
            <div className='mt-2 text-white'><BiLogoReact/></div>
            <p className='text-center text-white text-lg font-semibold'>React</p>
        </div>

        <div className='text-3xl rounded-xl bg-slate-800 flex flex-col justify-center items-center hover:bg-slate-400'>
            <div className='text-white mt-2 '><AiFillGithub/></div>
            <div className='text-center text-white text-lg font-semibold'>Github</div>
        </div>

        <div className='text-3xl rounded-xl bg-slate-800 flex flex-col justify-center items-center hover:bg-slate-400'>
            <div className='text-white mt-2 '><AiFillGithub/></div>
            <div className='text-center text-white text-lg font-semibold'>Github</div>
        </div>

        <div className='text-3xl rounded-xl bg-slate-800 flex flex-col justify-center items-center hover:bg-slate-400'>
            <div className='text-white mt-2 '><IoLogoFirebase /></div>
            <div className='text-center text-white text-lg font-semibold'>Firebase</div>
        </div>
    </div>
   </div>
   </div>
   </>
  )
}

export default Skills