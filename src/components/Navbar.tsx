 import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./Navbar.css"
const Navbar = () => {
    const items = useSelector((state:any) => state.cart);
    return (
        <div className='nav'>
            <span className="logo">PRODUCTS STORE</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Favorite
                </Link>
                <span className="cartCount">Favorite items: {items.length}</span>
            </div>
        </div>
    );
};

export default Navbar;
