import './App.css';
import React, { useState } from 'react'
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

function App() {
  return (
    <div className="App">
      {/* TO BE USED */}
      <SearchBar></SearchBar>
      <ProductTable></ProductTable>
    </div>
  );
}

export default App;

