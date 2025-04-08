import React from 'react'
import { navList } from './List'
import { Link } from 'react-scroll'
import remover from '../images/remover.png' 

const Navbar = () => {
  return (
    <>
    <div className='bg-slate-800 w-full h-20 hidden lg:block  text-slate-50 '>
      <nav>
        {/* <img className='w-40 -mt-2 ' src={remover} alt="" />          */}
        <div className=''>
          <ul className='flex justify-center gap-5'>
          {
            navList.map((items, index)=>(
              <Link smooth to={items.linkTo} className='hover:bg-white hover:text-teal-800 font-medium p-2 mt-5 font-serif cursor-pointer' key={index}>
                <div>
                  {items.title}
                </div>
              </Link>
            ))
          }
          </ul>
        </div>
      </nav>
    </div>
  
    </>
  )
}

export default Navbar