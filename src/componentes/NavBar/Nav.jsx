import "./Nav.css";
import CartWidget from "./CartWidget";

function NavBar () {
  return (
    <div className="nav">
      <img src="../../Logo-mercadito.svg" alt="logo" className="logo"/>
      <ul className= "nav-list">
        <li className="nav-list-item"><a href="#">Home</a></li>
        <li className="nav-list-item"><a href="#">Contacto</a></li>
        <li className="nav-list-item"><a href="#">Productos</a></li>
      </ul>
      <CartWidget/>
    </div>
  );
}

export default NavBar;
