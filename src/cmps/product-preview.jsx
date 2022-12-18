

export function ProductPreview({ product }) {
    return <div key={product._id} className="product-preview">
        <div className="product-image"><img srcSet={product.image} alt="" /></div>
        <div className="product-preview-details">
            <h4>{product.title.substring(0, 20)}...</h4>
            <h5>{product.category}</h5>

            <div></div>

            <p>{product.description.substring(0, 50)}...</p>
            <p>${product.price}</p>
        </div>

    </div>
}