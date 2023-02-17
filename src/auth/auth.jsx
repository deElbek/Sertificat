import { useState } from 'react';
import './auth.scss';
import SignIN from './in';
import SecurePIC from './secure.png'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Auth() {
    const [type, setType]=useState('in');
    return ( 
        <div className="auth">
            <ToastContainer autoClose={1500}/>
            <div className="container">
                <img src={SecurePIC} alt="Rasm" />
                <div className="form">
                    <div className="btns">
                        <button className={type==='in'?'active':null} onClick={()=>{setType('in')}}>Kirish</button>
                    </div>
                    {
                        <SignIN/>
                    }
                </div>
            </div>
        </div>
     );
}

export default Auth;