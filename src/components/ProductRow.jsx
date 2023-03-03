import React, { useState } from 'react'

export default function ProductRow(props) {
  const {product: {category, price, inStock, name, id}} = props;
  const stockStyle = {color: inStock ? 'black': 'red'}
  return (
    <tr>
      <td style={stockStyle}>{name}</td>
      <td>{price}</td>
    </tr>
  )
}