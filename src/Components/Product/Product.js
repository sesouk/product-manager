import React from 'react';

const Product = (props) => {
  const products = props.inventory.map((e, i) => {
    return <div key ={i}>
    <div>{e.name}</div>
    <div>{e.price}</div>
    <img src={e.img} alt={e.name}/>
    <button onClick={() => props.deleteProd(e.id)}>Delete</button>
    <button onClick={() => {props.toggle() && props.setId(e.id)}}>Edit</button>
    </div>
  })
  return (
    <>
    {products}
    </>
  );
};

export default Product;