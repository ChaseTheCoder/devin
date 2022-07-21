import React, { useContext } from 'react';
import Link from 'next/link';

const navItems = [{name: 'fitness'}, {name: 'eqx+'}, {name: 'modeling'}];

const Header = () => {
  return (
    <div className="container">
      <div className="w-full inline-block py-5">
        <ul className="md float-left list-outside">
          <li>
            <Link href="/">
              <span className="font-bold text-4xl uppercase">
                Devin Buchanan
              </span>
            </Link> 
          </li>
          <li>
            <Link href="/">
              <span className="">
                @theeblacktokyo
              </span>
            </Link>
          </li>
        </ul>
        <div className="hiddn md: float-left md:contents">
          {navItems.map((item) => (
            <Link key={item.name} href={`#${item.name}`}>
              <span className="md:float-right align-middle ml-4 uppercase font-semibod cursor-pointer">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header;