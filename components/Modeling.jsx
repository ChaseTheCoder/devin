import React from 'react';

const Modeling = ({ modeling }) => {

  return (
    <div 
      className="mx-auto pt-10 xl:pt-20"
      id='modeling'
    >
      <h1 className="text-lg uppercase md:text-3xl lg:text-4xl xl:text-5xl font-medium header--hr-centered pb-5 lg:pb-10">{modeling.header}</h1>
      <div className="xs:columns-1 md:columns-2 lg:columns-3 gap-5 overflow-hidden">
        {modeling.images.map(function(image, idx){
          return (
              <img className="w-auto pb-5" src={image.url} key={`modeling-${idx}`}/>
            )
        })}
        
      </div>
    </div>
  )
}

export default Modeling;