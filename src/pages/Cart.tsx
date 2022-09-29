import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
import "../components/ProductsPage.css"

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state:any) => state.cart);
    const handleRemove = (productId:any) => {
        dispatch(remove(productId));
    };

    return (
        <div>
            <h3>Cart</h3>
            <div className="productsWrapper">
                {products.map((product:any) => (
                    <div key={product.id} className="cartCard">
                         <img src={product.avatar} alt="" />
                        <h4>{product.name}</h4>
                        <h5>price:{product.price}</h5>
                        <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;