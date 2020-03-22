import React, { useState } from 'react';
import axios from 'axios'

const Form = (props) => {
  const [product, setProduct] = useState({name: '', price: '', img: '' })

  const updateName = val => setProduct({...product, name: val})
  const updatePrice = val => setProduct({...product, price: val})
  const updateImage = val => setProduct({...product, img: val})
  const clearProduct = () => {
    setProduct({name: '', price: '', img: ''})
    if (props.btn) {
      return null
    } else {
      props.toggle()
    }
}

  const createProduct = () => {
    const newProd = {
      name: product.name,
      price: product.price,
      img: product.img
    }
    axios.post("/api/product", newProd).then(() => {})
    clearProduct()
    props.getProducts()
  }
  
  return (
    <>
    <input placeholder='Name' onChange={e => updateName(e.target.value)} value={product.name}/>
    <input placeholder='Price'onChange={e => updatePrice(e.target.value)} value={product.price}/>
    <input placeholder='Image'onChange={e => updateImage(e.target.value)} value={product.img}/>
    <button onClick={clearProduct}>Cancel</button>
    { props.btn 
      ? <button onClick={createProduct}>Add</button>
      : <button onClick={props.toggle, clearProduct}>Save Changes</button> }
    </>
  );
};

export default Form;