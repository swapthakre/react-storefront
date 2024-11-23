function Cart(props){
    return(
        <form className="d-flex">
            <button className="btn btn-outline-dark">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">{props.cart.length}</span>
            </button>
        </form>
    )
}

export default Cart;