import "./Nav.css";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom"

function NavBar () {
  return (
    <div className="nav">
      <Link to='/'><img src="../../Logo-mercadito.svg" alt="logo" className="logo"/></Link>
      <ul className= "nav-list">
        <Link to="/"><li className="nav-link">Home</li></Link>
        <Link to="/categoria/ropa"><li className="nav-link">ropa</li></Link>
        <Link to="/categoria/accesorios"><li className="nav-link">accesorios</li></Link>
        <Link to="/OtraPagina"><li className="nav-link">Productos</li></Link>
      </ul>
      <CartWidget/>
    </div>
  );
}

export default NavBar;
