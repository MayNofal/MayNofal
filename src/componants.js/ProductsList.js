import React, { useEffect, useState } from "react";
import "../css/ProductsList.css"
import {useGetProductsQuery, useGetTrendQuery } from "../Api/ApiSlicePro";
import { FaPlusSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slices/CartSlice";


function ProductsList() {
  const dispatch=useDispatch();
 const cart=useSelector((state)=>(state.cart));
console.log(cart)
  const [searchTerm, setSearchTerm] = useState("");
  const { data: products, isLoading, isSuccess, error } = useGetProductsQuery();
const{data:trend,isLoading1,isSuccess1}=useGetTrendQuery();
console.log(trend)

  console.log(products);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  let filteredProducts = products
    ? products.filter((product) =>
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

    
  if (searchTerm.toLowerCase() === "men's clothing") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.toLowerCase() === "men's clothing"
    );
  } else if (searchTerm.toLowerCase() === "women's clothing"){
    filteredProducts=filteredProducts.filter(
 (product) => product.category.toLowerCase() === "women's clothing"
    );
  }
  else if (searchTerm.toLowerCase() === " jewelery"){
    filteredProducts=filteredProducts.filter(
 (product) => product.category.toLowerCase() === " jewelery"
    );
  }
  else if (searchTerm.toLowerCase() === "electronics"){
    filteredProducts=filteredProducts.filter(
 (product) => product.category.toLowerCase() === "electronics"
    );
  }
  else if (searchTerm.toLowerCase() === ""){
    filteredProducts=filteredProducts.filter(
 (product) => product.category.toLowerCase() === ""
    );
  }



  const handleAddToCart = (product) => {
  dispatch(addToCart(product));
  };



console.log(cart);
  if (isSuccess ||isSuccess1) {
    return (
      <>
        <h4>PRODUCTSLIST</h4>
        <div>
          <input
            type="text"
            placeholder="search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
         <div class="row row-cols-1 row-cols-md-3 g-4">
  {filteredProducts.map((product) => (
    <div class="col" key={product.id}>
      <div class="card">
        <div className="card-body"> 
        <img src={product.image} class="card-img-top" alt={product.title} />
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">
            <strong>Price:</strong> {product.price}
          </p>
          <p className="card-text">
            <strong>Category:</strong> {product.category}
          </p>
          <FaPlusSquare 
          onClick={()=>handleAddToCart(product)}/>
          
        </div>
     
      </div>
    </div>
  ))}
</div>
          <div class="divider"></div>
          <div class="row row-cols-1 row-cols-md-3 g-4">
  {trend.map((i) => (
    <div class="col" key={i.id}>
      <div class="card">
        <img src={i.image} class="card-img-top" alt={i.title} /> 
        <div class="card-body">
          <h5 class="card-title">{i.title}</h5>
          <p class="card-text">{i.description}</p> 
        </div>
        <FaPlusSquare   onClick={()=>handleAddToCart(i)} />
      </div>
    
    </div>
  ))}
</div>

</div>
        
      </>
    );
  }
}
export default ProductsList;