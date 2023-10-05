import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Product from './Product';

const api = 'https://fakestoreapi.com/products';
const {data:products} = await axios.get(api)

const ProductsList = () => {

    
    // const [products,setProducts] = useState([]);
    // useEffect(()=>{
    //     const fetchProducts = async ()=> {
    //         const response = await fetch(api);
    //         const data = await response.json();
    //         setProducts(data);
    //     }
    //     fetchProducts();

        
    // },[])
    console.log(products);
    return (
        <div>
            {products.map((product)=>(
                <Product key={product?.id}{...product}/>
            ))}
        </div>
    );
};

export default ProductsList;