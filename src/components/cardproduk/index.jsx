import React from 'react'
import { useNavigate } from "react-router-dom";

const CardProduk = () => {
    const navigate = useNavigate();
  return (
    <div>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                        </a>
                        <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                        <p className="mt-1">$16.00</p>
                        <div className="text-center mt-6">
                        <button
                            className="bg-blue-400 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow w-full hover:bg-blue-500"
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