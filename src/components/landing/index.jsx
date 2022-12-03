import React from 'react';
import { Carousel } from 'antd';

const Landing = () => {
    return (
        <>

            <div className='md:m-8'>
                <div className=' text-2xl font-bold text-black my-5px shadow-xl'>
                    <div className=' m-2 md:w-auto md:flex  '>
                        <div className='#'>
                            <div className='md:py-6'>
                                <div className='text-2xl font-semibold md:text-4xl'>
                                    <h5> Save Your Future</h5>
                                    <h5> Indivara Investment</h5>
                                </div>
                                <p className=' text-sm w-full md:text-xl'>Join Us And Take Your Pasif Income</p>
                                <p className='my-2 w-full text-xs md:max-w-2xl md:text-base'> Terpercaya menjaga dan memberikan pelayanan terbaik selama ratusan tahun, jaga dirimu dan orang tercinta
                                    dengan menjadi bagian Indivara Investment.</p>
                            </div>
                            <div className='my-2 flex md:my-10'>
                                <a className=' w-28 md:w-44' href="https://play.google.com/store/games">
                                    <img src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' alt='playstore'></img>
                                </a>
                                <a className='w-32 md:w-48 md:ml-6 md:mb-1' href='https://www.apple.com/id/app-store/'>
                                    <img src='https://www.loxone.com/enus/wp-content/uploads/sites/13/2017/09/IC_button-app-store@2x-1.png-1.png' alt='AppStore'></img>
                                </a>
                            </div>
                            <div className='flex '>
                                <h3 className="w-14 md:w-24" >
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/OJK_Logo.png" alt="#" />
                                </h3>
                                <h3 className="w-14 md:w-28 mt-1 ml-5" >
                                    <img src="https://seeklogo.com/images/K/kominfo-logo-DC4C2D403E-seeklogo.com.png" alt="#" />
                                </h3>
                                <h3 className="w-14 md:w-28 md:my-1 ml-5" >
                                    <img src="https://pontas.id/wp-content/uploads/2018/09/unnamed-1084x542.png" alt="#" />
                                </h3>

                            </div>
                        </div>
                        <Carousel autoplay effect="fade" className=" md:max-w-lg ">
                            <div>
                                <h3 className="md:h-auto md:w-auto  justify-center">
                                    <img src="https://www.qoala.app/id/blog/wp-content/uploads/2021/04/Mengenal-Macam-Macam-Asuransi-yang-Tersedia-di-Indonesia.jpg" alt="iklan"className='rounded-xl' />
                                </h3>
                            </div>
                            <div>
                                <h3 className="md:h-auto md:w-auto justify-center">
                                    <img src="https://www.qoala.app/id/blog/wp-content/uploads/2021/04/Mengenal-Macam-Macam-Asuransi-yang-Tersedia-di-Indonesia.jpg" alt="iklan"className='rounded-xl' />
                                </h3>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing