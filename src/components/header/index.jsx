import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white shadow-xl hover:bg-fixed rounded-b-xl">
      <div className="flex justify-between">
      <img src={require("./img/logo-indivara.png")} alt='logo' width="130px" height="85px"></img>
          <div className="brand">
          </div>
          <ul className="flex mt-3 mr-3">
            <li className='mr-5'><Button 
            type="primary"
            onClick={() => navigate(`/listproduct`)} 
            >List Product</Button></li>
            <li className='mr-7'><Button 
            onClick={() => navigate(`/login`)}
            >Login</Button></li>
          </ul>
        </div>
        </div>
        );
};

        export default Header;