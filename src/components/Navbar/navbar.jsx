import { Link } from "react-router-dom";
import "./navbar.scss";
function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
            <h1>APN</h1>
        </div>
        <div className="links">
          <Link to="/about">
            BIZ HAQIMIZDA
          </Link>
          <div className="link">
            ID: <input type="number" max={5}/> <Link to={'/sertificat'}><i className="fas fa-search"></i></Link>
          </div>
          <select>
            <option>UZ</option>
            <option>RU</option>
          </select>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
