import   { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
import "./ProductsPage.css" 
const Products = () => {
     
    const [data, setData] =useState([]);
    const [status,setStaus]=useState("")
    const dispatch=useDispatch()
   
     const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmdlc2gyMDQyQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9hbGljZWhhY2syMDIwIiwiaWF0IjoxNjY0MzUzOTQxLCJleHAiOjE2NjQ3ODU5NDF9.d_4zQfEqngzQXq6HZgx0C579-exiWT58PsgQQgA1yJw"
      useEffect(() => {
       const fetchProducts = async () => {
           const res = await fetch('https://upayments-studycase-api.herokuapp.com/api/products',{
               method:"GET",
               headers:new Headers({
                   'Authorization': 'Bearer '+token, 
                   'Content-Type': 'application/x-www-form-urlencoded'
               })
           });
           const data = await res.json();
           console.log(data);
           setData(data.products);
           setStaus(data.message)
       };
       fetchProducts();
   }, []);


    const handleAdd = (product:any) => {
        dispatch(add(product));
    };
 
    return (
        <div className="productsWrapper">
            {data.map((product:any) => (
                <div className="card" key={product.id}>
                    <img src={product.avatar} alt="" />
                    <h4>{product.name}</h4>
                    <h5>price:{product.price}</h5>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to favorite
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;
