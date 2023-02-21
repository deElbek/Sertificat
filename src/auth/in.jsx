import axios from 'axios';
import { useState } from 'react';
import { API_LINK } from '../cfg';
import { toast } from 'react-toastify';
import './auth.scss';
import SecurePIC from '../view/admin/secure.png'
function SignIN() {
    const [state, setState] = useState({})
    const Submit = () => {
        const { key, password } = state;
        if (!key || !password) {
            toast.error("Qatorlarni to'ldiring!")
        } else if (key.length < 5) {
            toast.error("key ni to'g'ri kirit!")
        } else if (password.length < 5) {
            toast.error("Parol kamida 5 talik bo'lishi kerak")
        } else {
            axios.post(`${API_LINK}/api/admin/signin`, state).then(res => {
                const { success, message } = res.data;
                if (!success) {
                    toast.error(message)
                } else {
                    toast.success(message)
                    localStorage.setItem('access_token', res.data.access_token)
                    setTimeout(() => {
                        window.location.reload()
                    }, 2000);
                }
            })
        }
    }
    return (
        <>
            <div className="auth">
                <div className="container">
                    <img src={SecurePIC} alt="Rasm" />
                    <div className="form">
                        <div className="inps">
                            <input type="text" placeholder="Login" onChange={e => { setState({ ...state, key: e.target.value }) }} />
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="inps">
                            <input type="password" placeholder="Parol" onChange={e => { setState({ ...state, password: e.target.value }) }} />
                            <i className="fas fa-lock"></i>
                        </div>
                        <div className="inps">
                            <button onClick={Submit}>Kirish</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIN;