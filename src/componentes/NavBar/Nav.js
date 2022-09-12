import "./Nav.css";

function NavBar () {
  return (
    <div className="nav">
      <ul className= "nav-list">
        <li className="nav-list-item"><a href="">Home</a></li>
        <li className="nav-list-item"><a href="">Contacto</a></li>
        <li className="nav-list-item"><a href="">Productos</a></li>
      </ul>
    </div>
  );
}

export default NavBar;
