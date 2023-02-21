import './s.scss';
import img from '../../view/images/as.jpg';
import { Link } from 'react-router-dom';
import { API_LINK } from '../../cfg';
function Sertifikat(props) {

  const { search } = props
  function move(e) {
    document.querySelector(".imgf").style.top = "-" + e.clientY * 0.03 + "px";
    document.querySelector(".imgf").style.left = "-" + e.clientX * 0.03 + "px";
  }
  return (
    <div className="sertifikat" >
      <div className="back"></div>
      <div className="main" onMouseMove={(e) => move(e)}>
        <h2><Link to={'/'}>Bosh sahifa</Link> > Sertifikat</h2>
        <div className="bottom">
          <div className="top">
            <h1>{search.name}</h1>
            <div className="i">
              <i className="fas fa-download"></i>
              <i className="fas fa-trash"></i>
            </div>
          </div>
          <div className="end">
            <img src={`${API_LINK}${search.image}`} alt="image" className='imgf' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sertifikat;