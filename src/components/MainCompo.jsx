import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const MainCompo = () => {
    return (
        <div>
          <Header></Header> 
          <br /><br /><br /> 
          <Outlet></Outlet>
        </div>
    );
};

export default MainCompo;
