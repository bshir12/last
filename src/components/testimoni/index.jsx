import React from 'react';
import './style.css';

const Testimoni = () => {
  return (
    <>
      <div className=' text-xl text-center font-bold md:text-3xl shadow-md'>What our early users have to say about Indivara Investment</div>
      <div className=' m-12 md:h-96 rounded-xl'>
        <div className='justify-center md:grid grid-rows-1 grid-flow-col gap-4 '>
              <div className='bg-blue-400 md:m-2 rounded-lg flex md:block mb-2 md:mb-0'>
                <img src={require('./img/alisia.jpeg')} alt="3" className='w-28 h-28 rounded-full ml-2 md:mx-12 mt-7 md:mt-5 ' />
                <h4 className='text-xl text-center font-semibold text-white md:visible invisible'>Alisia</h4>
                <p className='w-52 h-44 mt-3 md:mt-0 md:text-center text-left text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla libero tempore officia ratione tenetu.</p>
              </div>
              <div className='bg-blue-400 md:m-2 rounded-lg flex md:block mb-2 md:mb-0'>
                <img src={require('./img/apri.jpeg')} alt="3" className='w-28 h-28 rounded-full ml-2 md:mx-12 mt-7 md:mt-5' />
                <h4 className='text-xl text-center font-semibold text-white md:visible invisible'>Apri</h4>
                <p className='w-52 h-44 mt-3 md:mt-0 md:text-center text-left text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla libero tempore officia ratione tenetu.</p>
              </div>
              <div className='bg-blue-400 md:m-2 rounded-lg flex md:block mb-2 md:mb-0'>
                <img src={require('./img/basir.jpeg')} alt="3" className='w-28 h-28 rounded-full ml-2 md:mx-12 mt-7 md:mt-5' />
                <h4 className='text-xl text-center font-semibold text-white md:visible invisible'>Basir</h4>
                <p className='w-52 h-44 mt-3 md:mt-0 md:text-center text-left text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla libero tempore officia ratione tenetu.</p>
              </div>
              <div className='bg-blue-400 md:m-2 rounded-lg flex md:block mb-2 md:mb-0'>
                <img src={require('./img/dadan.jpeg')} alt="3" className='w-28 h-28 rounded-full ml-2 md:mx-12 mt-7 md:mt-5' />
                <h4 className='text-xl text-center font-semibold text-white md:visible invisible'>Dadan</h4>
                <p className='w-52 h-44 mt-3 md:mt-0 md:text-center text-left text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla libero tempore officia ratione tenetu.</p>
              </div>
              <div className='bg-blue-400 md:m-2 rounded-lg flex md:block mb-2 md:mb-0'>
                <img src={require('./img/oksa.jpeg')} alt="3" className='w-28 h-28 rounded-full ml-2 md:mx-12 mt-7 md:mt-5' />
                <h4 className='text-xl text-center font-semibold text-white md:visible invisible'>Oksa</h4>
                <p className='w-52 h-44 mt-3 md:mt-0 md:text-center text-left text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla libero tempore officia ratione tenetu.</p>
              </div>
        </div>
      </div>
    </>
  )
}

export default Testimoni