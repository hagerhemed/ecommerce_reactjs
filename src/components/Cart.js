import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/slices/cart-slice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc,product)=>{
    acc +=product.price *product.quantity;
    return acc;
  },0)

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="">Welcome to Cart</div>
          <button className="btn btn-dark mt-5" onClick={() => dispatch(clear())}>
            Clear Cart
          </button>
          <h5 className="mt-3">Total Price: {totalPrice.toFixed(2)} $ </h5>
          <table className="table mt-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Img</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, index) => (
                <tr key={product.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{product.title}</td>
                  <td>
                    <img src={product.image} alt={product.title} style={{ width: "100px" }} />
                  </td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(deleteFromCart(product))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cart;