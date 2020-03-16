import React from 'react';
import Product from '../Product/Product'

const Dashboard = (props) => {
  console.log(props.inventory);
  
  return (
    <>
    Dashboard
    <Product/>
    </>
  );
};

export default Dashboard;