import "./Nav.css";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom"

function NavBar () {
  return (
    <div className="nav">
      <Link to='/'><img src="../../Logo-mercadito.svg" alt="logo" className="logo"/></Link>
      <ul className= "nav-list">
        <Link className="nav-link" to="/"><li>Home</li></Link>
        <Link className="nav-link" to="/categoria/ropa"><li>ropa</li></Link>
        <Link className="nav-link" to="/categoria/accesorios"><li>accesorios</li></Link>
        <Link className="nav-link" to="/OtraPagina"><li>Productos</li></Link>

      </ul>
      <Link to="/cart"><CartWidget/></Link>
    </div>
  );
}

export default NavBar;
