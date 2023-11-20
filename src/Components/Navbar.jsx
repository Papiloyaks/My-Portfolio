import React from 'react'
import { navList } from './List'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <>
    <div className='bg-slate-800 w-full py-2 text-slate-50'>
      <nav>
        <div>
          <ul className='flex justify-center gap-5'>
          {
            navList.map((items, index)=>(
              <Link smooth to={items.linkTo} className='hover:bg-white hover:text-teal-800 font-medium p-2 rounded font-serif cursor-pointer' key={index}>
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
    <hr />
    </>
  )
}

export default Navbar