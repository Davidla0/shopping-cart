import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productService } from '../services/product.service';

export function ProductDetails() {

    const params = useParams()
    const[product, setProduct] = useState({})

    useEffect(() => {
        loadProduct()
    }, [])

    const loadProduct =  async() => {
        const productId = params.id
        const product = await productService.getById(productId)
        setProduct(product)
    }

    if (!product) return <div>Loading..</div>
    return <div className='product-details'>
        <h1>{product.title}</h1>
        <p>{product.category}</p>
        <img srcSet={product.image} alt="" />
        <h3>{product.description}</h3>
        <p>${product.price}</p>

    </div>
}