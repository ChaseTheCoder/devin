import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const navItems = [{name: 'fitness'}, {name: 'eqx+'}, {name: 'modeling'}];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 ease-in duration-300 px-5 bg-black">
      <div className="max-w-screen-xl m-auto flex justify-between items-center py-1">
        <a href="/">
          <h1 className="text-sm uppercase font-bold cursor-pointer">Devin Buchanan</h1>
        </a>
        <ul className="hidden sm:flex">
          {navItems.map((item) => (
            <li className="py-4 pl-5 hover:text-yellow-300"><a key={item.name} href={`/#${item.name}`}>{item.name}</a></li>
          ))}
            <li className="py-4 pl-5 cursor-pointer hover:text-yellow-300"><a key="tiktok" href="https://www.tiktok.com/@theeblacktokyo" target="_blank"><FontAwesomeIcon icon={faTiktok}/></a></li>
            <li className="py-4 pl-5 cursor-pointer hover:text-yellow-300"><a key="tiktok" href="https://www.instagram.com/theeblacktokyo" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a></li>
        </ul>
        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10 py-4">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
        </div>
        {/* Mobile Menu */}
        <div className={
          nav 
            ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300 bg-black" 
            : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300"
            }
          >
          <ul>
            {navItems.map((item) => (
              <li className="p-4 text-4xl hover:text-yellow-300"><a key={item.name} href={`/#${item.name}`}>{item.name}</a></li>
            ))}
            <li className="p-4 text-4xl hover:text-yellow-300"><a key="tiktok" href="https://www.tiktok.com/@theeblacktokyo" target="_blank"><FontAwesomeIcon icon={faTiktok}/></a></li>
            <li className="p-4 text-4xl hover:text-yellow-300"><a key="tiktok" href="https://www.instagram.com/theeblacktokyo/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
