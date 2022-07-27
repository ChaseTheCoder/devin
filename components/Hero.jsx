import React from 'react';

const Hero = ({ header }) => {
  return (
    <div className="pt-20 mx-auto absolute h-3/4">
      <div className="absolute left-0 pt-20 z-10">
        <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase">{header.name}</h1>
        <h2 className="text-sm md:text-2xl theme-color"><a href={header.socialHandleLink} target="_blank">{header.socialHandle}</a></h2>
      </div>
        <img className="w-3/4 md:w-1/2 lg:w-3/5 float-right z-0" src={header.headerImage.url} alt={header.name} />
    </div>
  )
}

export default Hero;