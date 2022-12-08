import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";


const PenjelasanProduct1 = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const fetchProduct = async (id) => {
    try {
      const url = `/api/v1/products/${id}`;
      const response = await api.get(url);
      const payload = { ...response?.data?.data?.product };
      console.log(payload);
      setProduct(payload || {});
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchProduct(params.id);
    }
  }, [params.id]);

  return (
    <>
      <div className="py-8 px-16 m-32 rounded-lg text-white mx-14 shadow-md bg-blue-400">
        
        <div className="grid grid-cols-2 mx-auto">
          <div className="m-3 py-5 font-normal">
            <h1 className="text-3xl uppercase font-serif py-2 ">{product?.namaProduk}.</h1>
            <h1 className="text-lg font-normal">Rp.{product?.harga}</h1>
            <div className="py-3 h-52">
              <p className="text-justify">
                {product?.deskripsi_lengkap}
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

export default PenjelasanProduct1;
