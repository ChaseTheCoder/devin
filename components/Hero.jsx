import React from 'react';
import Link from 'next/link';

// const header = {
//   name: "Devin Buchanan",
//   socialHandle: "@theeblacktokyo",
//   link: "https://www.instagram.com/theeblacktokyo/"
// }

const Hero = ({ header }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-1">
        <div className="pt-10">
          <h1 className="font-bold text-6xl uppercase">{header.name}</h1>
          <h2><a href={header.socialHandleLink} target="_blank">{header.socialHandle}</a></h2>
        </div>
        <div>
          <img className="object-cover" src={header.headerImage.url} alt={header.name} />
        </div>
      </div>
    </div>
  )
}

export default Hero;