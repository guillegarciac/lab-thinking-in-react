import React, { useState } from 'react'
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [checked, setChecked] = useState(true); //true to ensure all products are shown to the user by default. Otherwise, handleStockSearch() would be triggered with "checked=false".
  
  const handleSearch = (str) => {
    if (str.target.value === "") { //to reset the search when empty
      setProducts(jsonData)
    } else {
      const filteredProducts = products.filter(product => product.name.toLowerCase().includes(str.target.value.toLocaleLowerCase()))
      setProducts(filteredProducts)
    }
  }

  const handleStockSearch = (checked) => {
    if (checked) { //if true then we filter products by inStock property
      const availableProducts = products.filter(product => product.inStock);
      setProducts(availableProducts) //we update the products to show
      setChecked(!checked); // update the state of checked to as its opposite otherwise when we uncheck it from the UI => the not.inStock won't come back
    } else {
      setProducts(jsonData);
      setChecked(!checked)
    }
  }
  
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onChange={handleSearch} onCheck={handleStockSearch} checked={checked} />
      <ProductTable products={products} />
    </div>    
  )
}
