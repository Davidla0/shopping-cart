import {httpService} from './http.service'

export const productService = {
    query,
    getById
}

function query() {
    return httpService.get(`products`)
}

function getById(id){
    return httpService.get(`products/${id}`)
}