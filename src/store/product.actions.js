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

export function loadCart() {
    return async (dispatch) => {
        try {
            const cart = await productService.queryCart()
            dispatch({
                type: 'SET_CART',
                cart
            })
        } catch (error) {
            console.log('Cannot load cart', error)
        }

    }
}


export function addToCart(proId){
    return async (dispatch) => {
        try {
            const proToAdd = await productService.addShoppingCart(proId)
            dispatch({
                type: 'ADD_PRODUCT',
                proToAdd
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function deleteFromCart(proId){
    return async (dispatch) => {
        try {
            const proToDelete = await productService.deleteShoppingCart(proId)
            dispatch({
                type: 'REMOVE_PRODUCT',
                proToDelete
            })
        } catch (error) {
            console.log(error);
        }
    }
}
