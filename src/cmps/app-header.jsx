import { ReactComponent as Cart } from '../assets/img/cart.svg';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { loadCart } from '../store/product.actions';
import { useState } from 'react';

export function AppHeader() {
    const { shoppingCart } = useSelector(state => state.productModule)
    const [showCmp, setShowCmp] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        loadProCart()
    }, [])

    function loadProCart() {
        dispatch(loadCart())
    }

    return <div className='app-header '>
        <div className="shopping-cart">
            <div className='shopping-cart-svg' onClick={() => setShowCmp(prev => !prev)}><Cart /></div>
            <div className='products-amount'>{shoppingCart.length}</div>
        </div>
        <h4>| ShopeNow</h4>


    </div>
}