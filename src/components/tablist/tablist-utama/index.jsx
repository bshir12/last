import React from "react";
import CardPendidikan from "../card-pendidikan";
import CardKesehatan from "../card-kesehatan";
import CardJiwa from "../card-jiwa";
import { useNavigate } from "react-router-dom";

const TabList = () => {
    const [openTab, setOpenTab] = React.useState(1);
    const navigate = useNavigate();
    return (
        <>
            <div className="flex justify-center bg-sky-400 m-8 rounded-lg h-auto">
                <div className="text-center ">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist">
                        {/* asuransi pendidikan */}
                        <li className=" mr-2 last:mr-0 flex-auto text-center">
                            <a className={"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                (openTab === 1
                                    ? " bg-black"
                                    : " bg-slate-400")
                            }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                            >
                                <img src={require('./img/aboard-study.png')} className='w-32 mx-12'></img>
                            </a>
                        </li>
                        {/* Asuransi kesehatan */}
                        <li className="mr-2 last:mr-0 flex-auto text-center">
                            <a className={
                                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                (openTab === 2
                                    ? " bg-black"
                                    : " bg-slate-400")
                            }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                            >
                                <img src={require('./img/day-pana.png')} className='w-32 mx-12'></img>
                            </a>
                        </li>
                        {/* asuransi jiwa */}
                        <li className="mr-2 last:mr-0 flex-auto text-center">
                            <a className={
                                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                (openTab === 3
                                    ? " bg-black"
                                    : " bg-slate-400")
                            }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                            >
                                <img src={require('./img/Family-bro.png')} className='w-32 mx-12'></img>
                            </a>
                        </li>
                    </ul>


                    <div className="relative flex flex-col min-w-0 bg-white w-full mb-6 shadow-lg rounded h-auto">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                {/* asuransi pendidikan */}
                                <div className={openTab === 1 ? "block" : "hidden"}>
                                    <p className="font-semibold text-xl mb-12 shadow-xl rounded-lg">Asuransi Pendidikan</p>
                                    <div>
                                        <CardPendidikan/>
                                    </div>
                                </div>
                                {/* asuransi kesehatan */}
                                <div className={openTab === 2 ? "block" : "hidden"}>
                                <p className="font-semibold text-xl mb-12 shadow-xl rounded-lg">Asuransi Kesehatan</p>
                                    <div>
                                        <CardKesehatan/>
                                    </div>
                                </div>
                                {/* asuransi Jiwa*/}
                                <div className={openTab === 3 ? "block" : "hidden"}>
                                <p className="font-semibold text-xl mb-12 shadow-xl rounded-lg">Asuransi Jiwa</p>
                                    <div>
                                        <CardJiwa/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
        className="bg-white text-black active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow w-full hover:bg-blue-500"
        type="button"
        onClick={() => navigate(-1)}
        >
        Kembali
        </button>
                </div>
            </div>
        </>
    );
};

export default TabList;
