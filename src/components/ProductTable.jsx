import React, { useState } from 'react'
import ProductRow from './ProductRow'

export default function ProductTable(props) {
  const {products} = props;
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {products.map(product => {
          return <ProductRow product={product} key={product.id}/>
        })}
      </table>
    </div>
  )
}