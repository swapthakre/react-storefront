import axios from "axios";
import { useState, useEffect } from "react";

function Checkout(){
    const [ cart, setCart] = useState([])
    const [ userDetail, setUserDetail] = useState({})
    const [orderPlaced, setOrderPlaced] = useState(false)

    useEffect(() => {
        const products = localStorage.getItem('cart')
        setCart(JSON.parse(products))
    }, [])

    function formDetails(event){
        console.log(event.target.name, event.target.value);
        const key = event.target.name
        const value = event.target.value
        console.log(userDetail)
        setUserDetail({...userDetail, [key]: value})

    }

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevents the default form submission
        axios.post('http://localhost:3030/order', JSON.stringify(userDetail))
        .then((res) => setOrderPlaced(true))
        .catch(err => console.error(err))
      };

    return(
        <div className="container">
            {orderPlaced ? <h2>Thank You! Your Order is placed</h2> : <main>
                <div className="py-5 text-center">
                <h2>Checkout form</h2>
                <p className="lead">Please check the product before confirming the order.</p>
                </div>

                <div className="row g-5">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-primary">Your cart</span>
                    <span className="badge bg-primary rounded-pill">{cart.length}</span>
                    </h4>
                    <ul className="list-group mb-3">

                     {cart.map((product) =>
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                            <h6 className="my-0">{product.title}</h6>
                            </div>
                            <span className="text-body-secondary">{product.price * 83}</span>
                        </li>
                     )}   
                    
                    


                    {/* <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                        <div className="text-success">
                        <h6 className="my-0">Promo code</h6>
                        <small>EXAMPLECODE</small>
                        </div>
                        <span className="text-success">−$5</span>
                    </li> */}
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Total (INR)</span>
                        <strong>{cart.reduce((acc, curr) =>  acc + curr.price * 83, 0)}</strong>
                    </li>
                    </ul>

                    <form className="card p-2">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Promo code" />
                        <button type="submit" className="btn btn-secondary">Redeem</button>
                    </div>
                    </form>
                </div>
                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3">Billing address</h4>
                    <form className="needs-validation" onSubmit={handleSubmit} novalidate="">
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label for="firstName" className="form-label">First name</label>
                            <input type="text" name="name" className="form-control" id="firstName" placeholder="" onInput={(e) => formDetails(e)} />
                        <div className="invalid-feedback">
                            Valid first name is required.
                        </div>
                        </div>

                        <div className="col-sm-6">
                        <label for="lastName" className="form-label">Last name</label>
                        <input type="text" name="lname" className="form-control" id="lastName" placeholder="" required="" onInput={(e) => formDetails(e)} />
                        <div className="invalid-feedback">
                            Valid last name is required.
                        </div>
                        </div>

                        <div className="col-12">
                        <label for="mobile" className="form-label">Mobile</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text">+91</span>
                            <input type="number" name="mobile" className="form-control" id="mobile" placeholder="Mobile" required onInput={(e) =>  formDetails(e)} />
                        <div className="invalid-feedback">
                            Your mobile is required.
                            </div>
                        </div>
                        </div>

                        <div className="col-12">
                        <label for="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com" name="email" onInput={(e) => formDetails(e)} />
                        <div className="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                        </div>
                        <div className="col-12">
                        <label for="house" className="form-label">House <span className="text-body-secondary">(Optional)</span></label>
                        <input type="text" className="form-control" id="house" placeholder="Apartment or suite" name="house" onInput={(e) => formDetails(e)} />
                        </div>
                        <div className="col-12">
                        <label for="street" className="form-label">Street</label>
                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" name="street" onInput={(e) => formDetails(e)} />
                        <div className="invalid-feedback">
                            Please enter your shipping address.
                        </div>
                        </div>
                        
                        <div className="col-md-5">
                        <label for="country" className="form-label">Country</label>
                        <select className="form-select" id="country" required="" onChange={(e) => formDetails(e)} name="country">
                            <option value="">Choose...</option>
                            <option>India</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid country.
                        </div>
                        </div>
                        <div className="col-md-4">
                        <label for="state" className="form-label">State</label>
                        <select className="form-select" id="state" required="" onChange={(e) => formDetails(e)} name="state">
                            <option value="">Choose...</option>
                            <option>Maharashtra</option>
                        </select>
                        <div className="invalid-feedback">
                            Please provide a valid state.
                        </div>
                        </div>

                        <div className="col-md-3">
                        <label for="zip" className="form-label">Zip</label>
                        <input type="number" className="form-control" id="zip" placeholder="" required="" name="zipcode" onInput={(e) => formDetails(e)} />
                        <div className="invalid-feedback">
                            Zip code required.
                        </div>
                        </div>
                    </div>

                    <hr className="my-4" />

                    {/* <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="same-address" />
                        <label className="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                    </div> */}


                    {/* <hr className="my-4" />

                    <h4 className="mb-3">Payment</h4>

                    <div className="my-3">
                        <div className="form-check">
                        <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                        <label className="form-check-label" for="credit">Credit card</label>
                        </div>
                        <div className="form-check">
                        <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                        <label className="form-check-label" for="debit">Debit card</label>
                        </div>
                        <div className="form-check">
                        <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                        <label className="form-check-label" for="paypal">PayPal</label>
                        </div>
                    </div>

                    <div className="row gy-3">
                        <div className="col-md-6">
                        <label for="cc-name" className="form-label">Name on card</label>
                        <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                        <small className="text-body-secondary">Full name as displayed on card</small>
                        <div className="invalid-feedback">
                            Name on card is required
                        </div>
                        </div>

                        <div className="col-md-6">
                        <label for="cc-number" className="form-label">Credit card number</label>
                        <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                        <div className="invalid-feedback">
                            Credit card number is required
                        </div>
                        </div>
                        <div className="col-md-3">
                        <label for="cc-expiration" className="form-label">Expiration</label>
                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                        <div className="invalid-feedback">
                            Expiration date required
                        </div>
                        </div>
                        <div className="col-md-3">
                        <label for="cc-cvv" className="form-label">CVV</label>
                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                        <div className="invalid-feedback">
                            Security code required
                        </div>
                        </div>
                    </div> */}
                    <hr className="my-4" />
                    <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                    </form>
                </div>
                </div>
            </main>}
        </div>
    )
}

export default Checkout;