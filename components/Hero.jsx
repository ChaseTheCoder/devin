import React from 'react';
import Link from 'next/link';

// const header = {
//   name: "Devin Buchanan",
//   socialHandle: "@theeblacktokyo",
//   link: "https://www.instagram.com/theeblacktokyo/"
// }

const Hero = ({ header }) => {
  console.log(header.name)
  return (
    <div>
      <div className="grid">
        <h1>{header.name}</h1>
        <h2><a href={header.socialHandleLink} target="_blank">{header.socialHandle}</a></h2>
        {/* <img src={header.headerImage.url} alt={header.name} /> */}
      </div>
    </div>
  )
}

export default Hero;