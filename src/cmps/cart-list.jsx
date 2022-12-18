import {useDispatch, useSelector} from 'react-redux'
import { deleteFromCart } from '../store/product.actions'


export function CartList(){
    const { shoppingCart } = useSelector(state => state.productModule)
    const dispatch = useDispatch()

    function onDeletePro(proId){
        dispatch(deleteFromCart(proId))
    }

    function calcTotal(){
        return shoppingCart.reduce((occ, curr) =>{
            return occ + curr.price;
          }, 0);
    }

    return <div className='cart-list'>
        {shoppingCart.map(product => 
                <div className='product-cart' key={product._id}>
                    <h4>{product.title}</h4>
                    <img srcSet={product.image} alt=""/>
                    <h6>${product.price}</h6>
                    <button onClick={() => onDeletePro(product.proId)}>X</button>
                </div>
            )}

            <div className='total'>
                <h4>Total: ${calcTotal()}</h4>
                <h4>Products: {shoppingCart.length}</h4>
            </div>
    </div>
}
