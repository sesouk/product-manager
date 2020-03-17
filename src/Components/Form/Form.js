import React, { useState } from 'react';
import axios from 'axios'

const Form = (props) => {
  
  const [product, setProduct] = useState({name: '', price: '', img: '' })

  const updateName = val => setProduct({...product, name: val})
  const updatePrice = val => setProduct({...product, price: val})
  const updateImage = val => setProduct({...product, img: val})
  const clearProduct = () => setProduct({name: '', price: '', img: ''})

  // const createProduct = (obj) => {
  //   axios.post("/api/product", obj).then(() => {})
  // }
  
  // const {name, price, img} = product

  return (
    <>
    <input placeholder='Name' onChange={e => updateName(e.target.value)} value={product.name}/>
    <input placeholder='Price'onChange={e => updatePrice(e.target.value)} value={product.price}/>
    <input placeholder='Image'onChange={e => updateImage(e.target.value)} value={product.img}/>
    <button onClick={clearProduct}>Cancel</button>
    {/* <button onClick={createProduct({name, price, img})}>Add</button> */}
    </>
  );
};

export default Form;