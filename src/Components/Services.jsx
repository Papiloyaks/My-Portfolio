import React, { useEffect } from 'react'
import gram from '../images/gram.png'
import respon from '../images/respon.png'
import  web from '../images/web.png'
import design from '../images/design.png'
import apps from '../images/apps.png'
import bug from '../images/bug.png'
import Aos from 'aos'

const Services = () => {
  useEffect(() => {
   Aos.init({
    duration:3000,
   })
  
    
  }, [])
  
  return (
    <>
    <div  data-aos="flip-up">
        <section>
            <div className='grid lg:grid-cols-2 text-amber-800'>
                <div className='bg-white text-center' id='service'>
                    <h1 className='ms-10 text-2xl text-meduim text-amber-500 float-left mt-7 font-mono'>Services</h1>
                    <p className='flex justify-center items-center mt-20 text-2xl text-red-500'><img src={gram} width={30} alt="" /></p>
                    <h3 className='text-xl font-medium text-slate-800' >Web Designing</h3>
                    <p className='m-3'>Cater to clients looking for nostalgic or web design styles that evoke the aesthetics of past internet eras.</p>
                    
                    <p className='flex justify-center items-center text-2xl  text-red-500'><img src={respon} width={35} alt="" /></p>
                    <h3 className='text-xl font-medium text-slate-800'>Progressive Web Application</h3>
                    <p className='m-3'>Create web applications that function like native apps, offering features like offline access, push notifications, and fast loading times.</p>

                  <p className='flex justify-center items-center text-2xl text-red-500 mt-6'> <img src={web} width={35} alt="" /></p>
                  <h3 className='text-xl font-medium text-slate-800'>Interactive Websites</h3>
                    <p className='m-3'>Craft interactive storytelling experiences that blend text, images, animations, and user interactions to engage and captivate visitors.</p>

                </div>
                <div className='bg-slate-200 border text-center'>
                <p className='flex justify-center items-center text-2xl text-red-500 mt-20'><img src={design} width={30} alt="" /> </p>
                <h1 className='text-xl font-medium text-slate-800'>Web Design</h1>

                <p className='m-3'>Web design is the digital choreography of visual and interactive elements, a harmonious symphony of colors, typography, shapes, and functionality that, when orchestrated with creativity and precision, transforms the blank canvas of a webpage into an immersive, navigable experience.</p>

                <p className='flex justify-center items-center p-2 text-2xl text-red-500 mt-4 '><img src={apps} width={30} alt="" /> </p>
                <h1 className='text-xl font-medium text-slate-800'>Web App Development</h1>
                <p className='m-3'>
                Web app development is the artful fusion of technology and user-centric creativity, its a process where lines of code develops into dynamic, accessible portals that helps individuals to easily engage with services, data, and experiences.</p>

                <p className='flex justify-center items-center p-2 text-2xl text-red-500 mt-4'><img src={bug} width={30} alt="" /></p>
                <h1 className='text-xl font-medium text-slate-800'>Bug Fixing</h1>
                <p className='m-3'>Bug fixing is the digital detective work of smartly solving the tangled threads of software anomalies, its an endeavor where developers identify, isolate, and mend the quirks and glitches that disrupt the seamless tapestry of a program.</p>

                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default Services