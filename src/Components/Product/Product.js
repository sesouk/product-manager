import React from 'react';

const Product = (props) => {
  const inventory = props.inventory.inventory
  const products = inventory.map((e, i) => {
    return <div key ={i}>
    <div>{e.name}</div>
    <div>{e.price}</div>
    <img src={e.img} alt={e.name}/>
    </div>
  })
  return (
    <>
    {products}
    </>
  );
};

export default Product;