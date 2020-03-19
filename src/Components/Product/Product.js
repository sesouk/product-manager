import React from 'react';

const Product = (props) => {
  const inventory = props.inventory.inventory
  const products = inventory.map((e, i) => {
    return <div key ={i}>
    <div>{e.name}</div>
    <div>{e.price}</div>
    <img src={e.img} alt={e.name}/>
    <button>Delete</button>
    <button onClick={props.toggle.toggle}>Edit</button>
    </div>
  })
  return (
    <>
    {products}
    </>
  );
};

export default Product;