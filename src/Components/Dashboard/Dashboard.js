import React from 'react';
import Product from '../Product/Product'

const Dashboard = (props) => {

  return (
    <>
    Dashboard
    <Product inventory={props}/>
    </>
  );
};

export default Dashboard;