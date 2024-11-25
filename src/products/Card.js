import { useState } from "react";

function Card(props){
    const [product] = useState(props.product)

    return(
        <div className="col mb-5">
            <div className="card h-100">
                
                {/* <div className="badge bg-dark text-white position-absolute">Sale</div> */}
                <div className="ratio ratio-16x9">
                <img className="card-img-top img-fluid" src={product['image']} alt="Product Name" style={{ objectFit: 'contain' }} />
                </div>
                
                
                <div className="card-body p-4">
                    <div className="text-center">
                        
                        <h5 className="fw-bolder">{product.title}</h5>
                        <p className="truncate-multiline">{product.description}</p>
                        
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            {[...Array(Math.ceil(product.rating.rate)).keys()]
                            .map((star)=> product.rating.rate - star >= 0.5 ? 
                            <div className="bi-star-fill"></div> : <div className="bi-star-half-fill"></div>)}
                            {/* <div className="bi-star-half-fill"></div> */}
                        </div>
                        
                        <span className="text-muted text-decoration-line-through">₹{(product.price * 119).toFixed(2)}</span>
                        ₹{(product.price * 84).toFixed(2)}
                    </div>
                </div>
                
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center" onClick={() =>props.addToCart(product)}><a className="btn btn-outline-dark mt-auto">Add to cart</a></div>
                </div>
            </div>
        </div>
    )
}

export default Card;