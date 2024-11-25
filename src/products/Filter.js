import axios from "axios";
import { useEffect, useState } from "react";

function Filter(props){
    const [categories, setCategories] = useState([])

    useEffect(()=> {
        fetchData()
    }, [])
    const fetchData = async () => {
        const response = await axios.get('https://fakestoreapi.com/products/categories')
        setCategories(response.data)
    }

    function makeUpperCase(category){
        return category.charAt(0).toUpperCase() + category.substring(1)
    }

    return(
        <div class="dropdown">
            <button class="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filter
            </button>
            <ul class="dropdown-menu">
                {categories.map(category => <li role="button" onClick={() => props.setCategory(category)} key={category}>{makeUpperCase(category)}</li>)}
                <li role="button" key={"all"} onClick={() => props.setCategory("")}>All</li>
            </ul>
        </div>
    )
}

export default Filter;