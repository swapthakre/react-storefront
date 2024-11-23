import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Card from './Card'
import Filter from "./Filter"
import Cart from './Cart'
// <Products data={data} />
function Products(){
    
    const [products, setProducts] = useState([])
    const [filterList, setFilterList] = useState(products)
    const [category, setCategory] = useState("")
    const [cart, setCart] = useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(response => setProducts(response.data))
        .catch(error => console.error(error)) 

        const oldCart = localStorage.getItem('cart')
        console.log(oldCart)
        setCart(JSON.parse(oldCart))
    },[])


    useEffect(() => {
        const filtered = category == "" ? products :
        products.filter(product => product.category === category)
        setFilterList(filtered)

        // if(category == ""){
        //     setFilterList(products)
        // } else{
        //     const filtered = products.filter(product => product.category === category)
        //     setFilterList(filtered)
        // }
    }, [category, products])

    function addToCart(product){
        setCart([...cart, product])
        localStorage.setItem('cart', JSON.stringify([...cart, product]))
    }

    return(
        <section>
                <div className="container px-4 px-lg-5 mt-5 d-flex justify-content-between">
                    <Filter setCategory={setCategory}  />
                    <Link to="/checkout"><Cart cart={cart} /> </Link>
                </div>
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {filterList.map((product) => <Card key={product.id} product={product} addToCart={addToCart} />)}
                    </div>
                </div>
            </section>
)}

export default Products;