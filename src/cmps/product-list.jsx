import { ProductPreview } from './product-preview'
import { Link } from 'react-router-dom'
import React from 'react'
import { PlusMinus } from "./plus-minus";


export function ProductList({ products }) {

    return <section className="products-list">
        {products.map(product =>
            <div className='product' key={product._id}>
                <Link  to={`/details/${product._id}`}>
                    <ProductPreview product={product} />
                </Link>
                <PlusMinus proId={product._id}/>
            </div>
        )}
    </section>
}


