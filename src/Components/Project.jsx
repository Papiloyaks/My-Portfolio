import React, { useEffect } from 'react'
import ailf from '../images/ailf.jpg'
import corporate from '../images/corporate.png'
import jumy from '../images/jumy.png'
import add from '../images/add.png'
import movie from '../images/movie.png'
import shot from '../images/shot.png'
import screen from '../images/screen.png'
import caf from  '../images/caf.png'
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
      <h1 className='ms-10 font-meduim text-amber-200 p-9 font-mono mt-20'>My Project</h1>
    <section className=''>
      <div>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-96 p-6 bg-slate-800' id='portfolio'>
          <div className='text-white'>
            <h1 className='text-2xl font-medium p-1'>Humanitarian Website</h1>
            <p className='font-light'>Ailuckyfoundation is an organization that helps with the solution of poverty.Together, we’re saving lives—before, during and after disaster strikes.</p>
            <p className='font-medium text-amber-200 font-xl mt-2'>HTML, CSS, Javascript and Bootstrap.</p>
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
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-96 p-6 bg-slate-800'>
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
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-96 p-6 bg-slate-800'>
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
    <section className=''>
      <div>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-96 p-6 bg-slate-800'>
          <div className='text-white'>
            <h1 className='text-2xl font-medium p-1'>Advise Generator</h1>
            <p className='font-light'>Advise generator is reponsible for generating qoutes to keep you motivated</p>
            <p className='font-medium text-amber-200 font-xl mt-2'>React, Tailwind</p>
            {/* <button className='border bg-black text-sm rounded-xl hover:bg-transparent w-24 h-8 text-amber-200'>Check here</button> */}
            <p className='mt-5'>
            <a className='border bg-black text-sm rounded-xl hover:bg-transparent p-2 text-amber-200' href="https://advise-app.vercel.app/">Check here</a>
            </p>
          </div>
          <div className='lg:ms-60 py-5'>
            <img src={add} width={180} alt="" />
          </div>
        </div>
        <hr/>
      </div>
    </section>

    <section className=''>
      <div>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-96 p-6 bg-slate-800'>
          <div className='text-white'>
            <h1 className='text-2xl font-medium p-1'>Entertainment Movie App</h1>
            <p className='font-light'>its an app created to with API to fetch updated new movies, series and Tv shows.</p>
            <p className='font-medium text-amber-200 font-xl mt-2'>React, Tailwind</p>
            <p className='mt-5'>
            <a className='border bg-black text-sm rounded-xl hover:bg-transparent p-2 text-amber-200' href="https://entertainment-app-mu.vercel.app/">Check here</a>
            </p>
          </div>
          <div className='lg:ms-60 py-5'>
            <img src={movie} width={200} height={20} alt="" />
          </div>
        </div>
        <hr/>
      </div>
    </section>

    <section className=''>
      <div>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-96 p-6 bg-slate-800'>
          <div className='text-white'>
            <h1 className='text-2xl font-medium p-1'>Mini-Mart</h1>
            <p className='font-light'>👉 Browse our curated selection of quality products.</p>
            <p className='font-light'>🛍️ Add items to your cart with a simple click.</p>
            <p className='font-light'>💳 Checkout seamlessly with secure payment options.</p>
            <p className='font-light'>✨ Experience hassle-free shopping, delivered to your doorstep.</p>
            <p className='font-medium text-amber-200 font-xl mt-2'>React, Bootstrap and Javascript</p>
            <p className='mt-5'>
            <a className='border bg-black text-sm rounded-xl hover:bg-transparent p-2 text-amber-200' href="https://shop-mart-six.vercel.app/">Check here</a>
            </p>
          </div>
          <div className='lg:ms-60 py-5'>
            <img src={shot} width={300} height={20} alt="" />
          </div>
        </div>
        <hr/>
      </div>
    </section>

    <section className=''>
      <div>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-96 p-6 bg-slate-800'>
          <div className='text-white'>
            <h1 className='text-2xl font-medium p-1'>PiggyVest Clone</h1>
            <p className='font-light'>Responsive PiggyVest clone with amazing interface</p>
            <p className='font-medium text-amber-200 font-xl mt-2'>React, Bootstrap and CSS3</p>
            <p className='mt-5'>
            <a className='border bg-black text-sm rounded-xl hover:bg-transparent p-2 text-amber-200' href="https://piggevest-clone.vercel.app/">Check here</a>
            </p>
          </div>
          <div className='lg:ms-60 py-5'>
            <img src={screen} width={200} height={20} alt="" />
          </div>
        </div>
        <hr/>
      </div>
    </section>
    </div>

    <section className=''>
      <div>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-96 p-6 bg-slate-800'>
          <div className='text-white'>
            <h1 className='text-2xl font-medium p-1'>Online Coffee Shop</h1>
            <p className='font-light'>Indulge in the perfect cup, anytime, anywhere. Order your favorite coffee from the comfort of home and let our baristas craft it with care.</p>
            <p className='font-medium text-amber-200 font-xl mt-2'>React, Taiwind</p>
            <p className='mt-5'>
            <a className='border bg-black text-sm rounded-xl hover:bg-transparent p-2 text-amber-200' href="https://coffena-shop.vercel.app/">Check here</a>
            </p>
          </div>
          <div className='lg:ms-60 py-5'>
            <img src={caf} width={500} height={20} alt="" />
          </div>
        </div>
        <hr/>
      </div>
    </section>
    </>
    
  )
}

export default Project