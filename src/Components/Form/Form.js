import React, { useState, useEffect } from 'react';
import axios from 'axios'
import noImg from '../Assets/noimage.png'

const Form = (props) => {
  const { getImg, getName, getPrice, editImg, 
    editName, editPrice, btn, id, 
    toggle, getProducts } = props
  const [prodName, setName] = useState('')
  const [prodPrice, setPrice] = useState('')
  const [prodImage, setImage] = useState('')

  const updateName = val => setName(val)
  const updatePrice = val => setPrice(val)
  const updateImage = val => setImage(val)

  useEffect(() => check())

  const check = () => {
      updateName(editName)
      updateImage(editImg)
      updatePrice(editPrice)
  }

  const clearProduct = () => {
    updateImage('')
    updatePrice('')
    updateName('')
    getImg('')
    getPrice('')
    getName('')
    if (btn) {
      return null
    } else {
      toggle()
    }
}

  const createProduct = () => {
    const newProd = {
      name: prodName,
      price: prodPrice,
      img: prodImage
    }
    axios.post("/api/product", newProd).then(() => {getProducts()})
    clearProduct()
    
  }

  const editProduct = (id) => {
    const editProd = {
      name: prodName,
      price: prodPrice,
      img: prodImage
    }
    axios.put(`/api/product/${id}`, editProd).then(() => {getProducts()})  
  }

  return (
    <div className='form'>
      { !prodImage 
      ? <img src={noImg} alt='Nothing to display'/>
      : <img src={prodImage} alt={prodName}/> }   
      <input placeholder='Name' onChange={e => getName(e.target.value)} value={prodName}/>
      <input placeholder='Price'onChange={e => getPrice(e.target.value)} value={prodPrice}/>
      <input placeholder='Image'onChange={e => getImg(e.target.value)} value={prodImage}/>
      <div>
        <button onClick={clearProduct}>Cancel</button>
        { btn 
          ? <button onClick={createProduct}>Add</button>
          : <button onClick={() => {
            toggle(); clearProduct(); editProduct(id)
            }}>Save Changes</button> }
      </div>
    </div>
  );
};

export default Form;