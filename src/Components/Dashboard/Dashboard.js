import React from 'react';
import Product from '../Product/Product'
import axios from 'axios';

const Dashboard = (props) => {
  const deleteProd = (id) => {
    axios.delete(`/api/inventory/${id}`).then(r => 
      props.getProducts())
  }

  return (
    <>
    Dashboard
    <Product inventory={props.inventory} toggle={props.toggle} deleteProd={deleteProd}/>
    </>
  );
};

export default Dashboard;