import React from 'react';
import Product from '../Product/Product'
import axios from 'axios';

const Dashboard = (props) => {
  const deleteProd = (id) => {
    axios.delete(`/api/inventory/${id}`).then(r => 
      props.getProducts())
  }

  return (
    <div className='dashboard'>
        <Product 
        inventory={props.inventory} toggle={props.toggle} 
        deleteProd={deleteProd} getId={props.getId}
        btn={props.btn} getName={props.getName} getPrice={props.getPrice} getImg={props.getImg} editProd={props.editProd}/>
    </div>
  );
};

export default Dashboard;