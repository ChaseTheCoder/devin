import React from 'react';

const Equinox = ({ equinox }) => {

  return (
    <div 
      className="mx-auto pt-10 xl:pt-20 gap-8 flex flex-col sm:flex-row"
      id='equinox'
    >
      <div className='basis-1/2'>
        <h1 className="uppercase text-xl md:text-3xl lg:text-4xl xl:text-5xl font-medium header--hr-centered pb-5 lg:pb-10">
          {equinox.title}
        </h1>
        <p className='sm:text-lg md:text-2xl lg:text-3xl'>
          {equinox.description}
        </p>
        <a className="sm:text-lg md:text-2xl lg:text-3xl underline underline-offset-6 theme-color pt-10" href={equinox.callToActionLink} target="_blank">
          {equinox.callToAction}
        </a>
      </div>
      <div className='basis-1/2 sm:order-first'>
        <img 
          className='w-auto' 
          src={equinox.headerImage.url}
          alt={equinox.headerImageAlt}
        />
      </div>
    </div>
  )
}

export default Equinox;