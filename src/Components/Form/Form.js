import React, { useState } from 'react';

const Form = () => {
  
  const [product, setProduct] = useState({name: '', price: '', image: '' })

  const updateName = val => setProduct({...product, name: val})
  const updatePrice = val => setProduct({...product, price: val})
  const updateImage = val => setProduct({...product, image: val})
  const clearProduct = () => setProduct({name: '', price: '', image: ''})

  return (
    <>
    <input placeholder='Name' onChange={e => updateName(e.target.value)} value={product.name}/>
    <input placeholder='Price'onChange={e => updatePrice(e.target.value)} value={product.price}/>
    <input placeholder='Image'onChange={e => updateImage(e.target.value)} value={product.image}/>
    <button onClick={clearProduct}>Cancel</button>
    <button>Add</button>
    </>
  );
};

export default Form;