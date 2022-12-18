import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { addToCart, deleteFromCart } from "../store/product.actions";

export function PlusMinus({proId}) {
    let [count, setCount] = useState(0);
    const {shoppingCart} = useSelector(state => state.productModule)
    const dispatch = useDispatch()

    useEffect(() => {
        let amount = shoppingCart.filter(pro => pro.proId === proId)
        setCount(amount.length)
    })

    function incrementCount() {
        setCount(count + 1);
        addCart(proId)

    }
    function decrementCount() {
        if (count === 0) return 
        setCount(count - 1);
        deleteCart(proId)

    }

    function addCart(proId){
        dispatch(addToCart(proId))
    }

    function deleteCart(proId){
        dispatch(deleteFromCart(proId))
    }

    return (
        <div className="plus-minus-buttons">
            <button onClick={incrementCount}>+</button>
            <div>{count}</div>
            <button onClick={decrementCount}>-</button>
        </div>
    );
}
