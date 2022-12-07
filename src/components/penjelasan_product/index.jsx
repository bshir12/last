import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TombolKembali  } from "@components";


const PenjelasanProduct = () => {

  const navigate = useNavigate();
  return (
    <>
      <div className="py-8 px-16 m-32 rounded-lg text-white mx-14 shadow-md bg-orange-500">
      <div>
                <button className="border border-white text-white mx-auto mb-3 px-10 py-2 rounded-lg  hover:bg-white hover:text-black"
                type="button"
                onClick={() => navigate(-1)}
                >
                  Kembali
                </button>
            </div>
        <hr />
        <div className="grid grid-cols-2 mx-auto">
          <div className="m-3 py-5 font-normal"> 
            <h1 className="text-3xl uppercase font-serif py-2 ">ASURANSI.</h1>
            <h1 className="text-lg font-normal">Rp.3.000.00</h1>
            <div className="py-3 h-52">
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam et ullam eaque ut neque quibusdam facilis inventore placeat! Exercitationem, possimus perspiciatis a inventore soluta necessitatibus ducimus explicabo ex odit suscipit!
              </p>
            </div>

            <div className="grid grid-cols-2 mx-auto ">
              <div>
                <button className="border border-white text-white mx-auto px-16 py-3 rounded-lg hover:bg-white hover:text-black"
                type="button"
                onClick={() => navigate('/formulir')}
                >
                  Buy Product
                </button>
              </div>
              <div>
                <button className="border border-white text-white mx-auto px-16 py-3 rounded-lg  hover:bg-white hover:text-black">
                  Watch Product
                </button>
              </div>
            </div>
            <br />
           
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
