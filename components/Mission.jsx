import React from 'react';

const Mission = ({ mission }) => {

  return (
  <div 
    className="mx-auto pt-10 xl:pt-20 gap-4 md:gap-8 flex flex-col sm:flex-row"
    id='fitness'
  >
    <div className='basis-1/3 height-100 flex'>
      <h1 className="text-xs uppercase sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-medium header--hr-centered align-center">
        {mission.missionStatement}
      </h1>
    </div>
    <div className='basis-2/3'>
      <img 
        className='w-auto' 
        src={mission.images[1].url}
      />
    </div>
  </div>
  )
}

export default Mission;