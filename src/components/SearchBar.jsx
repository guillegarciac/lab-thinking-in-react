import React, { useState } from 'react'

export default function SearchBar(props) {
  const {onChange, onCheck, checked} = props;

  return (
    <div>
      <input value={undefined} type="text" placeholder="search product..." onChange={onChange} />
      <input type="checkbox" onChange={()=> onCheck(checked)}/><span>Only show products in stock</span>
    </div>
  )
}