import React, { useState } from 'react';
import Link from 'next/link';
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
    <nav className="fixed top-0 left-0 w-full z-10 ease-in duration-300">
      <div className="max-w-screen-xl m-auto flex justify-between items-center py-2 px-4">
        <Link href="/">
          <h1 className="font-bold text-xl sm:text-2xl uppercase">Devin Buchanan</h1>
        </Link>
        <ul className="hidden sm:flex">
          {navItems.map((item) => (
            <li className="py-4 pl-5"><Link key={item.name} href={`#${item.name}`}>{item.name}</Link></li>
          ))}
            <li className="py-4 pl-5"><FontAwesomeIcon icon={faTiktok}/></li>
            <li className="py-4 pl-5"><FontAwesomeIcon icon={faInstagram}/></li>
        </ul>
        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10 py-4">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
        </div>
        {/* Mobile Menu */}
        <div className={
          nav 
            ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300" 
            : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300"
            }
          >
          <ul>
            {navItems.map((item) => (
              <li className="p-4 text-4xl hover:text-yellow-300"><Link key={item.name} href={`#${item.name}`}>{item.name}</Link></li>
            ))}
            <li className="p-4 text-4xl hover:text-yellow-300"><FontAwesomeIcon icon={faTiktok}/></li>
            <li className="p-4 text-4xl hover:text-yellow-300"><FontAwesomeIcon icon={faInstagram}/></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
