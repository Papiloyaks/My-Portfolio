import React, { useEffect } from 'react'
import ailf from '../images/ailf.jpg'
import corporate from '../images/corporate.png'
import jumy from '../images/jumy.png'
import Aos from 'aos'



const Project = () => {
  useEffect(() => {
    Aos.init({
      duration: 5000,

    });
    
  
    return () => {
      
    }
  }, [])
  return (
    <>
    <div data-aos="flip-right">
    <div>
      <h1 className='ms-10 font-meduim text-amber-200 p-9 font-mono mt-20'>------- My Project</h1>
    <section className=''>
      <div>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-96 p-6 px-8 bg-slate-800' id='portfolio'>
          <div className='text-white'>
            <h1 className='text-2xl font-medium p-1'>Humanitarian Website</h1>
            <p className='font-light'>Ailuckyfoundation is an organization that helps with the solution of poverty.Together, we’re saving lives—before, during and after disaster strikes.</p>
            <p className='font-medium text-amber-200 font-xl mt-2'>HTML, CSS, and Bootstrap.</p>
            <p className='mt-5'>
            <a className='border bg-black text-sm rounded-xl hover:bg-transparent p-2 text-amber-200' href=" https://papiloyaks.github.io/A.I-Lucky-Foundation/">Check here</a>
            </p>
          </div>
          <div className='lg:ms-60 py-5' data-aos="fade-up">
            <img src={ailf} width={150} alt="" />
          </div>
        </div>
        <hr/>
      </div>
    </section>
    </div>
    <section className=''>
      <div>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-96 p-6 px-8 bg-slate-800'>
          <div className='text-white'>
            <h1 className='text-2xl font-medium p-1'>Salesforce</h1>
            <p className='font-light'>A clone of Salesforce webapp</p>
            <p className='font-medium text-amber-200 font-xl mt-2'>HTML, CSS and Bootstrap</p>
            <p className='mt-5'>
            <a className='border bg-black text-sm rounded-xl hover:bg-transparent p-2 text-amber-200' href="https://papiloyaks.github.io/Salesforce-Project/">Check here</a>
            </p>
          </div>
          <div className='lg:ms-60 py-5'>
            <img src={corporate} width={170} alt="" />
          </div>
        </div>
        <hr/>
      </div>
    </section>
    <section className=''>
      <div>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-96 p-6 px-8 bg-slate-800'>
          <div className='text-white'>
            <h1 className='text-2xl font-medium p-1'>E-commerce</h1>
            <p className='font-light'>This is an e-commerce app. It enables users to select different items and add to cart.the Idea is from Jumia e-commerce app</p>
            <p className='font-medium text-amber-200 font-xl mt-2'>HTML, CSS, Bootstrap and Javascript.</p>
            <p className='mt-5'>
            <a className='border bg-black text-sm rounded-xl hover:bg-transparent p-2 text-amber-200' href="https://papiloyaks.github.io/Level-2-Project/">Check here</a>
            </p>
          </div>
          <div className='lg:ms-60 py-5'>
            <img src={jumy} width={150} alt="" />
          </div>
        </div>
        <hr/>
      </div>
    </section>
    {/* <section className=''>
      <div>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-96 p-6 px-8 bg-slate-800'>
          <div className='text-white'>
            <h1 className='text-2xl font-medium p-1'>Humanitarian Website</h1>
            <p className='font-light'>Ailuckyfoundation is an organization that helps with the solution of poverty.Together, we’re saving lives—before, during and after disaster strikes.</p>
            <p><a href="/Ailuckyfoundation.com.ng">Ailuckyfoundation.com.ng</a></p>
            <button className='border bg-black text-sm rounded-xl hover:bg-transparent w-24 h-8 text-amber-200'>Check here</button>
          </div>
          <div>
            <img src={Ailf} width={150} alt="" />
          </div>
        </div>
        <hr/>
      </div>
    </section> */}
    </div>
    </>
    
  )
}

export default Project