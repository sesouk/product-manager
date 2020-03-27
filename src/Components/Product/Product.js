import React from 'react';

const Product = (props) => {
  const { getId, toggle, deleteProd, inventory, btn } = props
  const products = inventory.map((e, i) => {
    return <div key ={i}>
    <div className='prodBtn'>
    <img src={e.img} alt={e.name}/>
    <div className='prodBtnHldr'>
    <div>Product: {e.name}</div>
    <div>Price: ${e.price}</div>
    <button onClick={() => deleteProd(e.id)}>Delete</button>
    <button onClick={() => {
      getId(e.id); 
      if (btn) toggle()
      }}>Edit</button>
    </div>
    </div>
    </div>
  })
  return (
    <>
    {products}
    </>
  );
};

export default Product;