import { NavLink, Link } from "react-router-dom";

function Header(){
    return(
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span className="fs-4 logo">Seller Website</span>
            </a>

            <ul className="nav nav-pills">
                <li className="nav-item"><NavLink to="/" className="nav-link" aria-current="page">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
                <li className="nav-item"><NavLink to="/products" className="nav-link">Products</NavLink></li>
            </ul>
            </header>
        </div>
    )

}
export default Header;