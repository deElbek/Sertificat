import { Link } from "react-router-dom";
import axios from "axios"
import { API_LINK } from "../../cfg";
import "./navbar.scss";
function Navbar(props) {

  const { show, setShow, setSearch } = props;

  const searchRecord = () => {
    axios.post(`${API_LINK}/api/auth/sergetone?id=${show}`).then(res => {
      if (!res.data.success) {
        alert(res.data.message)
      } else {
        setSearch(res.data.data)
      }
    }).catch(error => {
      console.log("err " + error);
    })
  }
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
            ID: <input type="number" onChange={e => { setShow(e.target.value) }} max={5} /> <button onClick={searchRecord} ><i className="fas fa-search"></i></button>
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
