import React from 'react';
import style from './styles.module.css'
import img from '../../view/images/as.jpg'

function Total() {
    return ( 
        <>
            <div className={style.container}>
                <div className={style.usersbox}>
                    <div className={style.users}>
                        <img src={img} alt="" />
                        <div>
                        <h2>Sertificat</h2>
                        <h3>Id: 54004</h3>
                        <h3>Front-End development</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Total;