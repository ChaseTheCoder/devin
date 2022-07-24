import React from 'react';

const Hero = ({ header }) => {
  return (
    <div className="pt-20 relative">
      <div className="absolute left-0 pt-20 z-10">
        <h1 className="font-bold text-6xl uppercase">{header.name}</h1>
        <h2 className="text-2xl theme-color"><a href={header.socialHandleLink} target="_blank">{header.socialHandle}</a></h2>
      </div>
      <div className="h-3/4">
        <img className="h-fit absolute right-0 z-0" src={header.headerImage.url} alt={header.name} />
      </div>
    </div>
  )
}

export default Hero;