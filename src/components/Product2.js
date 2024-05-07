import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../rtk/slices/cart-slice";

function Product2(props) {
  const { product, showbutton } = props;
  const dispatch =useDispatch()
  return (
    <div className="card m-3">
      <div className="ratio ratio-4x3">
        <img src={product.image} className="card-img-top img-fluid" alt={product.title} />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate">{product.title}</h5>
        <p className="card-text text-truncate">{product.description}</p>
        <div className="mt-auto">
          <span className="d-block">{product.price}</span>
          {showbutton && (
            <Link to={`/product/${product.id}`} className="btn btn-dark mt-3">
              Details
            </Link>
          )}
          <Link to="" className="btn btn-success mt-3 ms-4" onClick={() => dispatch(addCart(product))}>
              Add Cart
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Product2;