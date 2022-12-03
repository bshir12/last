import React from 'react'
import { Header, TombolKembali } from '@components'
import { useNavigate } from "react-router-dom";

const Formulir = () => {
  const navigate = useNavigate(6);
  return (
    <>
      <Header />
      <div className='h-44 flex justify-center mt-12 rounded-lg border-b-2 shadow-xl m-32'>
        <div className='w-5/12'>
          <p className=''>Layanan Nasabah</p>
          <h3 className='font-semibold text-2xl'>Formulir</h3>
          <p>Temukan dokumen dan formulir penting yang Anda butuhkan untuk memudahkan pelayanan kami</p>
        </div>
        <img src={require('./img/layanan-img.png')} className='w-72'></img>
      </div>
      <div>
        <h2 className='text-2xl font-semibold text-center shadow-xl m-8'>Formulir</h2>
        <div className='bg-ternery m-8 rounded-lg '>
          <p className=' text-white m-5'>Formulir Asuransi Kesehatan</p>
        </div>
        <div className='bg-ternery m-8 rounded-lg '>
          <p className=' text-white m-5'>Formulir Asuransi Jiwa</p>
        </div>
        <div className='bg-ternery m-8 rounded-lg '>
          <p className=' text-white m-5'>Formulir Asuransi Pendidikan</p>
        </div>
      </div>
      <TombolKembali/>
      <br />
      <div>
        <button 
          className="bg-blue-400 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow w-full hover:bg-blue-500"
          type="button"
          onClick={() => navigate('/payment')}
          >
          Lanjut ke Pembayaran
          </button>
      </div>
    </>
  )
}

export default Formulir