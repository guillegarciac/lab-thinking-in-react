import React, { useState } from 'react'

export default function ProductRow(props) {
  const {product: {category, price, inStock, name, id}} = props;
  return (
    <tr>
      <th>{name}</th>
      <th>{price}</th>
    </tr>
  )
}