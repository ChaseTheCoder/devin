import React from 'react';

const Mission = ({ mission }) => {
  const images = mission.images;


  return (
    <div 
      className="mx-auto pt-10 xl:pt-20" 
      id="fitness"
    >
      <h1 className="text-xs sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-medium header--hr-centered pb-5 lg:pb-10">      
        {mission.missionStatement}
      </h1>
      <div className="columns-2 gap-5 overflow-hidden">
        {images.map(function(image, idx){
          return (<img className="h-full w-full object-cover object-center" src={image.url} key={idx}/>)
        })}
      </div>
    </div>
  )
}

export default Mission;