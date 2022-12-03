import React from 'react'
const Footer = () => {
    return (
        <>
            <div className='pl-8 block md:flex bg-primary bg-gradient-to-b rounded-xl '>
                <div className='my-14 max-w-4xl'>
                    <h2 className='text-2xl text-slate-300'>Layanan Nasabah</h2>
                    <h6 className='text-sm text-slate-300'>Indivara Investment Tower Ground Floor</h6>
                    <p className='text-sm text-slate-300'>Jl.Orange Jeruk Kav.18 Mampang Prapatan Jakarta Selatan, 14499</p>
                    <div className='my-5'>
                        <h4 className='text-xl text-slate-300'>Contact Center</h4>
                        <h6 className='text-slate-300'>Senin-Jumat</h6>
                        <p className='text-slate-300'>Pukul 08.00-16.00 WIB</p>
                        <p className='text-slate-300'>pusatlayanan@indivara.co.id</p>
                    </div>
                </div>
                <div className=' ml-0 md:ml-20 md:my-14 w-96 '>
                    <h2 className='text-2xl text-slate-300'>About Us</h2>
                    <p className='text-sm text-justify text-slate-300'>Indivara Investment adalah perusahaan yang bergerak di bidang Asuransi dan
                        Deposito perusahaan ini dikembangkan secara digital sejak tahun 2022 dibawah naungan Indivara Group.</p>
                    <h2 className='text-2xl my-5 text-slate-300'>Visi & Misi Perusahaan</h2>
                    <h6 className='text-lg text-slate-300'>Visi Perusahaan</h6>
                    <p className='text-sm text-justify text-slate-300'>Visi kami adalah menjadi perusahaan investasi deposito dan asuransi terkemuka dan terpercaya di ASIA.</p>
                    <h6 className='text-lg text-slate-300'>Misi Perusahaan</h6>
                    <p className='text-sm text-justify text-slate-300'>Menjadi platform terpercaya dan terbaik dalam hal deposito dan asuransi hingga Tahun 3020.</p>
                </div>

                <img src={require("./img/logo-indivara.png")} alt='logo' className='w-60 h-28 ml-9 md:ml-24 my-14'></img>

            </div>

            <div className='text-center bg-slate-300'>
            <p>©2022 Hak Cipta Dilindungi.</p>
            </div>
        </>
    )
}

export default Footer