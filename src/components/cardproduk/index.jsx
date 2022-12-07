import React from 'react'
import { useNavigate } from "react-router-dom";

const CardProduk = () => {
    const navigate = useNavigate();
  return (
    <div>
        <section className="text-gray-600 body-font grid grid-cols-3">
            <div className="container px-4 py-20 mx-auto">
                <div className="flex m-4">
                    <div className="w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                        </a>
                        <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                        <p className="mt-1">$16.00</p>
                        <div className="text-center mt-6">
                        <button
                            className="bg-orange-500 text-white font-[poppins] active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow w-full hover:text-white hover:bg-orange-700 hover:border"
                            type="button"
                            onClick={() => navigate(`/detailproduct`)}
                            >
                            Ingin tahu!!
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-4 py-20 mx-auto">
                <div className="flex m-4">
                    <div className="w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                        </a>
                        <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                        <p className="mt-1">$16.00</p>
                        <div className="text-center mt-6">
                        <button
                            className="bg-orange-500 text-white font-[poppins] active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow w-full hover:text-white hover:bg-orange-700 hover:border"
                            type="button"
                            onClick={() => navigate(`/detailproduct`)}
                            >
                            Ingin tahu!!
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-4 py-20 mx-auto">
                <div className="flex m-4">
                    <div className="w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                        </a>
                        <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                        <p className="mt-1">$16.00</p>
                        <div className="text-center mt-6">
                        <button
                            className="bg-orange-500 text-white font-[poppins] active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow w-full hover:text-white hover:bg-orange-700 hover:border"
                            type="button"
                            onClick={() => navigate(`/detailproduct`)}
                            >
                            Ingin tahu!!
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
  )
}

export default CardProduk