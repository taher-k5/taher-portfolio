import React, { useState } from 'react'
import { styles } from '../styles'
import {logo, menu, close } from "../assets";
import { Link } from 'react-router-dom';
import {navLinks} from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={` ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={() => { setActive(""); window.scroll(0,0); }}>
          <img src={logo} alt="logo" className='object-contain w-9 h-9' />
          <p className='text-white text-[18px] font-bold cursor-pointer inline-block'>Taher <span className='sm:block hidden'> |  portfolio </span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav, index) => (
            <li key={index}
              className={`
                ${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer
              `}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />

        </div>
      </div>
    </nav>
  )
}

export default Navbar