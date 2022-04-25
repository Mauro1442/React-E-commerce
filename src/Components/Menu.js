import { Link } from "react-router-dom";
function Menu() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/alta">Registro</Link>
        </li>
        <li>
          <Link to="/ingresar">Login</Link>
        </li>
      </ul>
    </>
  );
}
export default Menu;
