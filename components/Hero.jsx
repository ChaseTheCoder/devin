import React from 'react';

const header = {
  name: "Devin Buchanan",
  socialHandle: "@theeblacktokyo",
  link: "https://www.instagram.com/theeblacktokyo/"
}

const Hero = () => {
  return (
    <div>
      <div className="grid">
        <h1>{header.name}</h1>
        <h2><a href={header.link} target="_blank">{header.socialHandle}</a></h2>
      </div>
    </div>
  )
}

export default Hero;