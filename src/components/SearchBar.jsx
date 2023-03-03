import React, { useState } from 'react'

export default function SearchBar(props) {
  const {onChange} = props;

  return (
    <div>
      <input value={undefined} type="text" placeholder="search product..." onChange={onChange} />
      <input type="checkbox"/><span>Only show products in stock</span>
    </div>
  )
}