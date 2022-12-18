import {httpService} from './http.service'

export const productService = {
    query,
}

function query() {
    return httpService.get(`products`)
}

