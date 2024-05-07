import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Navbar(){
  const cart = useSelector(state => state.cart);
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container">
    <a class="navbar-brand" href="/#">Ecommerce</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;