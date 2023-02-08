import React from 'react';

const Equinox = ({ equinox }) => {

  return (
    <div 
      className="mx-auto pt-10 xl:pt-20 gap-8 flex flex-col sm:flex-row"
      id='equinox+'
    >
      <div className='basis-1/2'>
        <img className='w-auto' src={equinox.headerImage.url} target="_blank"/>
      </div>
      <div className='basis-1/2'>
        <h1 className="text-xs uppercase sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-medium header--hr-centered pb-5 lg:pb-10">{equinox.title}</h1>
        <p className='sm:text-lg md:text-2xl lg:text-3xl'>{equinox.description}</p>
        <a className="text-2xl font-bold underline underline-offset-6 theme-color" href={equinox.callToActionLink}>
          {equinox.callToAction}
        </a>
      </div>
    </div>
  )
}

export default Equinox;