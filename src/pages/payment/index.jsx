
import React  from "react";
import { Header, Footer, BayarMandiri, BayarBca, BayarBri,Upload, TombolKembali} from "@components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const navigate = useNavigate(9);
  /*const [copyText, setCopyText] = React.useState();
  /*const handleCopy=()=>{
    navigator.clipboard.witerText(copyText)
    alert("Copied")}
  */
  return (
    <>
      <Header />
      <div className="text-center rounded-md mx-20 mt-6 text-3xl font-bold text-orange-500 font-[poppins]">Payment</div>
      <div className="flex flex-wrap justify-center my-12 ">
        <ul
          className="flex list-none flex-wrap pt-3 pb-4 flex-row"
          role="tablist"
        >
          <li className=" h-28 w-80 mr-2 last:mr-0 flex-auto ">
            <a
              className={
                "text-xs font-bold h-24 px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 1
                  ? "text-white bg-orange-500"
                  : "text-black bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              <img className="w-48 ml-11 mt-3 " src={require("./img/BCA.png")} alt='#'></img>
            </a>
          </li>
          <li className="h-28 w-80 mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs h-24 font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 2
                  ? "text-white bg-orange-500"
                  : "text-black bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              <img className="w-36 ml-16 mt-4 " src={require("./img/BRI.png")} alt='#'></img>
            </a>
          </li>
          <li className="h-28 w-80 mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold h-24 uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 3
                  ? "text-white bg-orange-500"
                  : "text-black bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              <img className="w-60 ml-5" src={require("./img/LogoMandiri.png")} alt='#'></img>
            </a>
          </li>
        </ul>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
          <div className="px-4 py-5 flex-auto text-center">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="border rounded-md mx-20 shadow-xl mt-6 font-[poppins]">
                  <p className="text-4xl">127 987 3211</p>
                  
                </div>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="border rounded-md mx-20 shadow-xl mt-6 font-[poppins]">
                  <p className="text-4xl">9981 356 817 113</p>
                
                </div>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="border rounded-md mx-20 shadow-xl mt-6 font-[poppins] ">
                  <p className="text-4xl">567 227 999 732 456</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 mx-auto text-center">
        <button 
          className="bg-orange-500 text-white border border-orange-500 font-[poppins] active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow mx-auto hover:bg-orange-700"
          type="button"
          onClick={() => navigate('/profile')}
          >
          Selesai
          </button>
      </div>  
      <Footer />
    </>
  );
};

export default Payment;
