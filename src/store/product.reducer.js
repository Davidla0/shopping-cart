
const initialState = {
    products: [],
    shoppingCart: []
}

export function productReducer(state = initialState, action) {
    let shoppingCart
    
    switch (action.type) {
        case 'SET_PRODUCTS':
            return { ...state, products: action.products }
        case 'SET_CART':
            return { ...state, shoppingCart: action.cart }
        case 'ADD_PRODUCT':
            return { ...state, shoppingCart: [...state.shoppingCart, action.proToAdd] }
        case 'REMOVE_PRODUCT':
            shoppingCart = state.shoppingCart.filter(product => product._id !== action.proToDelete._id)
            return { ...state, shoppingCart }
        default:
            return state
    }


}

