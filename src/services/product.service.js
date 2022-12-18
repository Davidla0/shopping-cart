import {httpService} from './http.service'

export const productService = {
    query,
    getById,
    addShoppingCart,
    deleteShoppingCart,
    queryCart
}

function query() {
    return httpService.get(`products`)
}

function queryCart(){
    return httpService.get(`products/cart`)
}

function getById(id){
    return httpService.get(`products/${id}`)
}

function addShoppingCart(proId){
    return httpService.post(`products/update/${proId}`)
}

function deleteShoppingCart(proId){
    return httpService.delete(`products/update/${proId}`)
}