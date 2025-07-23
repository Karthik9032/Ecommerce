import React, { useEffect, useState } from 'react';
import './Product.css';
import ProductCarousel from '../../Components/ProductsCarousel/ProductCarousel';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Product() {
  const [product, setProduct] = useState({});
  const {id}=useParams();
  useEffect(()=>{
    async function ProductDetails(){
        if(id)
        {
        let product=await axios.get('https://dummyjson.com/products/'+id)
        setProduct(product.data)
    }}
    ProductDetails()
  },[])
  return (
    <div className='ProductPage d-flex'>
      <div className='productImages halfDiv d-flex justify-content-center align-items-center'>
        <ProductCarousel images={product.images} />
      </div>
      <div className='productInfo halfDiv d-flex align-items-start'>
        <div className='d-flex flex-column row-gap-3 p-4'>
            <h1> {product.title}</h1>
            <h3> Price$:{product.price}</h3>
            <h5>{product.category}</h5>
            <h5>{product.description}</h5>
            <button className='btn btn-primary btn-lg w-25' onClick={()=>addToCart(product)}>
                    Add to cart
            </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
