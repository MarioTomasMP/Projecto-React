import "./Nav.css";
import CartWidget from "./CartWidget";

function NavBar () {
  return (
    <div className="nav">
      <img src="../../Logo-mercadito.svg" alt="logo" className="logo"/>
      <ul className= "nav-list">
        <li className="nav-link"><a href="#">Home</a></li>
        <li className="nav-link"><a href="#">Contacto</a></li>
        <li className="nav-link"><a href="#">Productos</a></li>
      </ul>
      <CartWidget/>
    </div>
  );
}

export default NavBar;
