import React from 'react';

const Hero = ({ header }) => {
  return (
    <div className="relative m-auto max-w-screen-xl pt-20 h-[25rem] sm:h-[31rem] md:h-[32rem] lg:h-[40rem] xl:h-screen">
      <div className="pt-20 sm:pt-33 lg:pt-44 xl:pt-56 absolute left-0">
        <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase">{header.name}</h1>
        <h2 className="text-sm md:text-2xl theme-color"><a href={header.socialHandleLink} target="_blank">{header.socialHandle}</a></h2>
      </div>
        <img className="absolute right-0 bottom-0 h-5/6" src={header.headerImage.url} alt={header.name} />
    </div>
  )
}

export default Hero;