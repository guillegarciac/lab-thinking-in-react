import React, { useState } from 'react'
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  
  const handleSearch = (str) => {
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(str.target.value.toLocaleLowerCase()))
    setProducts(filteredProducts)
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onChange={handleSearch} />
      <ProductTable products={products} />
    </div>    
  )
}
