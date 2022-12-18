import { useEffect } from "react";
import { loadProducts } from "../store/product.actions";
import { useDispatch, useSelector } from 'react-redux'
export function App() {

  const {products} = useSelector(state => state.productModule)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadProducts())
  }, [])

  if(!products) return <h1>Loading .. </h1>
  return (
    <div className="App main-container">
      {products.map(pro => 
      <div>{pro.title}</div>
        )}
    </div>
  );
}

