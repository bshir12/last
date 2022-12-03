import React from 'react'
import TombolPenjelasan from '../buttondetail'

const CardJiwa = () => {
  return (
    <div className='w-72 h-80 rounded-lg border shadow-xl bg-sky-400 border-slate-500 hover:bg-slate-400 block'>
      <img src={require('./old.png')} className='w-40 ml-14'></img>
      <div className=' w-full h-32'>
      <a className='text-lg'>Asuransi Jiwa BRI Assurance</a>
      <p className='text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus rerum nisi mollitia eaque tempora. Neque in sapiente laboriosam at tempore nisi incidunt, excepturi dolorem fugit eaque, rerum similique veniam unde.</p>
      <p className='mt-2 font-semibold'>Rp.55.000,-/Bulan</p>
      <TombolPenjelasan/>
      </div>
    </div>
  )
}

export default CardJiwa