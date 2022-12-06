import React from "react";
import CardPendidikan from "../card-pendidikan";
import CardKesehatan from "../card-kesehatan";
import CardJiwa from "../card-jiwa";

const TabList = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="flex justify-center m-8 rounded-lg h-auto">
                <div className="text-center ">
                    <ul
                        className="mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist">
                        <div className="w-3/4 justify-center ml-36 flex">
                            {/* asuransi pendidikan */}
                            <li className=" mr-2 last:mr-0 flex-auto text-center w-12">
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
                                    <img src={require('./img/aboard-study.png')} className='w-32 ml-7' alt="aboard"></img>
                                </a>
                            </li>
                            {/* Asuransi kesehatan */}
                            <li className="mr-2 last:mr-0 flex-auto text-center w-12">
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
                                    <img src={require('./img/day-pana.png')} className='w-32 ml-7' alt="pana"></img>
                                </a>
                            </li>
                            {/* asuransi jiwa */}
                            <li className="mr-2 last:mr-0 flex-auto text-center w-12">
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
                                    <img src={require('./img/Family-bro.png')} className='w-32 ml-7' alt="family"></img>
                                </a>
                            </li>
                        </div>
                    </ul>


                    <div className="relative flex flex-col min-w-0 bg-white w-full mb-6 shadow-lg rounded h-auto">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                {/* asuransi pendidikan */}
                                <div className={openTab === 1 ? "block" : "hidden"}>
                                    <p className="font-semibold text-xl mb-12 shadow-xl rounded-lg">Asuransi Pendidikan</p>
                                    <div>
                                        <CardPendidikan />
                                    </div>
                                </div>
                                {/* asuransi kesehatan */}
                                <div className={openTab === 2 ? "block" : "hidden"}>
                                    <p className="font-semibold text-xl mb-12 shadow-xl rounded-lg">Asuransi Kesehatan</p>
                                    <div>
                                        <CardKesehatan />
                                    </div>
                                </div>
                                {/* asuransi Jiwa*/}
                                <div className={openTab === 3 ? "block" : "hidden"}>
                                    <p className="font-semibold text-xl mb-12 shadow-xl rounded-lg">Asuransi Jiwa</p>
                                    <div>
                                        <CardJiwa />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TabList;
