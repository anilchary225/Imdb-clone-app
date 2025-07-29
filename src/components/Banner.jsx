import React from 'react'

function Banner() {
  return (
    <div role="banner" className='h-[20vh] md:h-[60vh] bg-cover bg-center flex items-end'  style={{backgroundImage:'url(https://cdn.marvel.com/content/1x/avengersendgame_lob_mas_dsk_01.jpg)'}}>
      <div className='text-white text-xl w-full text-center bg-blue-900/60 p-3 font-copper'>Avengers Endgame</div>
    </div>
  )
}

export default Banner
