import React, { useState } from 'react'
import ProductRow from './ProductRow'

export default function ProductTable(props) {
  const {products} = props;
  return (
    <div>
      <table className="styled-table">
      <thead>
        <tr className="row">
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products
          .map(product => {
          return <ProductRow product={product} key={product.id}/>
          })}
      </tbody>
      </table>
    </div>
  )
}