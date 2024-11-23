import React from 'react'
import ProductRow from './ProductRow'
import { productData } from '../../utils/cardData'


const ProductSection = () => {

  
  return (
    <div>
        {
            productData.map((data, index) => (
                <ProductRow key={index} data={data}/>
            ))
        }

    </div>
  )
}

export default ProductSection