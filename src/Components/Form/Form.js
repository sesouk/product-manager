import React, { useState } from 'react';

const Form = () => {
  
  const [product, setProduct] = useState({name: '', price: null, image: '' })

  return (
    <>
    <input>Name</input>
    <input>Price</input>
    <input>Image</input>
    <button>Cancel</button>
    <button>Add</button>
    </>
  );
};

export default Form;