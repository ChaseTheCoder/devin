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
      <div className="grid">
        <h1>{header.name}</h1>
        <h2><a href={header.socialHandle} target="_blank">{header.socialHandleLink}</a></h2>
      </div>
    </div>
  )
}

export default Hero;