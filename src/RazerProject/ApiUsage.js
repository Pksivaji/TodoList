import React from 'react'
import Apidata from './Apidata'

export default function ApiUsage() {
    let product=Apidata('https://fakestoreapi.com/products/1')
  return (
    <div>
        <hi>custom hooks </hi>
        <div>{product.title}</div>
    </div>
  )
}
