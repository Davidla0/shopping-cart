import {productService} from '../services/product.service'

export function loadProducts() {
    return async (dispatch) => {
        try {
            const products = await productService.query()
            dispatch({
                type: 'SET_PRODUCTS',
                products
            })
        } catch (error) {
            console.log('Cannot load products', error)
        }

    }
}

