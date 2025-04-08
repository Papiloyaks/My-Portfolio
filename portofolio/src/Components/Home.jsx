import React, { useEffect } from 'react'
import pana from '../images/pana.png'
import Aos from 'aos'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'



const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 20000,

    });
    
  
    return () => {
      
    }
  }, [])
  
  return (
    <>
    <div data-aos="zoom-in-left" id='about'>
    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:px-20 lg:gap-60 p-10'>
    <div className=''>
      <h1 className='text-slate-50 text-3xl mt-9 '>Hi, I'm <span className='text-amber-200 font-serif'>Yaks<br /><span className='text-white text-2xl'>A</span><span className='ml-2 text-amber-200'>Frontend Developer.</span></span>
      </h1>
      <h2 className='text-xl mt-2 text-amber-200 font-light font-san'>
                    An expert in {" "}
                    <TypeAnimation
                        sequence={[
                            "Javascript", 500,
                            "React", 500,
                            "CSS", 500,
                            "HTML", 500,
                            "Tailwind Css", 500,
                            "Bootstrap", 500,
                            "Git", 500
                        ]}
                        style={{fontSize: "1em"}}
                        repeat={Infinity}
                    />
                </h2>
      <h6 className='mt-3 ms-10 text-xl'><span className='text-slate-50'>-------</span><span className='ml-2 text-amber-200 font-meduim font-mono'>About Me</span> :</h6>
      <p className='text-slate-50 mt-2 font-light'>I am a passionate Frontend developer with a strong background in creating both dynamic and non-dynamic websites using advanced HTML, CSS, Javascript, and React. With a relentless commitment to excellence, I do not give up when tackling challenges and finding innovative solutions. My skill set, joined with a love for continuous learning, allows me to triumph in dynamic environments and contribute to meaningful projects.</p>
      <div className='mt-5 text-white font-medium'>
      <Link to='portfolio' className='hover:bg-transparent hover:text-amber-200 me-6 border p-2 rounded bg-slate-800 text-sm' href="">See my Work</Link>
      <a className='hover:bg-transparent hover:text-amber-200 border p-2 rounded bg-slate-800 text-sm' href="https://docs.google.com/document/d/1JeOC1QKzOZ9HMCSyt1LRUXZWqASp8bG7mbx_bvZ4YVM/edit?usp=drive_link">Download my CV</a>
    </div>
    </div>

      <div className='sm:py-10'>
        <img className='' src={pana} width={400} alt="" />
    </div>
    </div>
    </div>
    <hr />
    </>
  )
}

export default Home