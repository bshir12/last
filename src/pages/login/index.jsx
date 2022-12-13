import React from "react";
import { useNavigate } from "react-router-dom";
import {Header} from '@components'

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
    <Header/>
            <div className="mx-auto mt-14 lg:w-4/12 px-4 relative flex flex-col w-full mb-6 shadow-xl shadow-gray-500 rounded-lg bg-slate-100 ">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h3 className="text-blueGray-500 text-sm font-bold">
                    Log In
                  </h3>
                </div>
                
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Username
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="bashir"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-blue-900 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow w-full hover:bg-blue-800"
                      type="button"
                      onClick={() => navigate(`/profile`)}
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-blue-900 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow w-full hover:bg-blue-800"
                      type="button"
                      onClick={() => navigate(`/register`)}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
          </div>
    </>
  );
}
