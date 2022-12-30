import React from 'react'
// import a from 'next/link'

export default function ProductItem({ product }) {
    return (
        <div className="card">
            {/* //link tag replace the a  */}
            <a href={`/product/${product.slug}`}>
                <a>
                    <img src={product.image} alt={product.name} className="rounded shadow" />
                </a>
            </a>
            <div className="flex flex-col items-center justify-center p-5">
            <a href={`/product/${product.slug}`}>
                <a>
            <h2 className='text-lg'>
                    {product.name}
                </h2>
                </a>
                </a>
               <p className='mb-2'>{product.brand}</p>
               <p>${product.price}</p>
               <button className="primary-button" type="button">
                Add to cart
               </button>
            </div>
        </div>
    )
}