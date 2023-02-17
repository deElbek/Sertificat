import './s.scss';
import img from '../../as.jpg';
import { Link } from 'react-router-dom';
function Sertifikat() {
  function move(e) {
    document.querySelector(".imgf").style.top = "-" + e.clientY * 0.03 + "px";
    document.querySelector(".imgf").style.left = "-" + e.clientX * 0.03 + "px";
  }
    return ( 
        <div className="sertifikat" >
          <div className="back"></div>
          <div className="main" onMouseMove={(e) => move(e)}>
          <h2><Link to={'/'}>Bosh sahifa</Link> -- Sertifikat</h2>
          <div className="bottom">
            <div className="top">
              <i className="fas fa-download"></i>
              <i className="fas fa-trash"></i>
            </div>
            <div className="end">
              <img src={img} alt="" className='imgf'/>
            </div>
          </div>
          </div>
        </div>
      );
}

export default Sertifikat;