import React from "react";
import { useNavigate } from "react-router-dom";
import { TombolKembali  } from "@components";

const PenjelasanProduct = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="py-8 px-16 m-32 rounded-lg text-white mx-14 shadow-md bg-blue-400">
        <div className="grid grid-cols-2 mx-auto">
          <div className="m-3 py-5 font-normal">
            <h1 className="text-3xl uppercase font-serif py-2 ">ASURANSI.</h1>
            <h1 className="text-lg font-normal">Rp.3.000.00</h1>
            <div className="py-3 h-52">
              <p className="text-justify">
                ini penjelasan produk yg akan dibeli
              </p>
            </div>

            <div className="grid grid-cols-2 mx-auto ">
              <div>
                <button className="bg-white text-black py-3 px-20 rounded-lg"
                type="button"
                onClick={() => navigate('/formulir')}
                >
                  Buy Product
                </button>
              </div>
              <div>
                <button className="bg-white text-black py-3 px-20 rounded-lg ">
                  {" "}
                  Watch Product{" "}
                </button>
              </div>
            </div>
            <br />
            <div>
                <button className="bg-white text-black py-3 px-20 rounded-lg text-2xl"
                type="button"
                onClick={() => navigate(-1)}
                >
                  Kembali
                </button>
            </div>
          </div>
          <div className="m-3 ">
            <img className="mx-auto max-w-sm" src={require("./img/Lo-fi concept-bro.png")}  />
          </div>
        </div>
      </div>
    </>
  );
};

export default PenjelasanProduct;
