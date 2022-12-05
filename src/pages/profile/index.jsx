import { Header, Footer, TabProfile, CardProduk} from "@components";
import { Button } from "antd";
import React from "react";

const Profile = () => {
  return (
    <>
      <Header />
          <div className="bg-slate-400 m-6 rounded-lg h-60">
            <div className="flex justify-left">
              <div>
              <img
                className=" w-48 h-48 ml-12 mt-5 rounded-full border "
                src="http://placeimg.com/640/360/any"
                alt="#"
              />

              <div className="block ml-9 mt-4">
                {/* Full Name */}
                <div>
                  <label className="form-label inline-block mb-2 text-gray-700">
                    Nama Lengkap
                  </label>
                </div>
                <div className="flex">
                  <input
                    className=" border border-solid border-gray-300 rounded-md"
                    placeholder="  Anak Ilang"
                  />
                  <input
                    className=" ml-6 w-12 text-center border border-solid border-gray-300 rounded-md"
                    placeholder="Umur"
                  />
                </div>
                {/* Phone Number */}
                <div>
                  <label className="form-label inline-block mb-2 text-gray-700">
                    Phone Number (+62)
                  </label>
                </div>
                <div className="flex">
                  <input
                    className=" border border-solid border-gray-300 rounded-md"
                    placeholder="  081213141516"
                  />
                </div>
                {/* Alamat */}
                <div>
                  <label className="form-label inline-block mb-2 text-gray-700">
                    Alamat
                  </label>
                </div>
                <div className="flex">
                  <input
                    className="border border-solid border-gray-300 rounded-md w-60"
                    placeholder="  jalan kembang tulip no3"
                  />
                </div>
              </div>
                <Button className="mt-3 w-28 bg-cyan-900">Edit</Button>
              </div>
            </div>
          </div>
          {/* Assuransi */}
          <div>
            <div className="shadow-2xl border-b-2 m-5 rounded-lg text-center font-bold text-2xl">
              Produk Asuransi Anda
            </div>
            <div className="bg-slate-400 mb-5 m-5 h-36 rounded-lg">
              <input
                className="w-80 h-16 m-12 text-center bg-cyan-800 rounded-md text-base"
                placeholder="Asuransi Kesehatan (BCA Assurance)"
                disabled
              />
              <input
                className="w-80 h-16 m-12 text-center bg-cyan-800 rounded-md text-base"
                placeholder="Asuransi Jiwa (BRI Assurance)"
                disabled
              />
              <input
                className="w-80 h-16 m-12 text-center bg-cyan-800 rounded-md text-base"
                placeholder="Asuransi Pendidikan (Mandiri Assurance)"
                disabled
              />
            </div>
          </div>
          {/* Assuransi */}
          <div>
            <div className="shadow-2xl border-b-2 m-5 rounded-lg text-center font-bold text-2xl">
              Produk Deposito Anda 
            </div>
              <CardProduk/>
            <div className="bg-slate-400 mb-5 m-5 h-36 rounded-lg"></div>
          </div>

      <TabProfile />
      <Footer />
    </>
  );
};

export default Profile;
