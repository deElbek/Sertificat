import React from "react";
import style from  "./styles.module.css";

function Admin() {

  return (
    <main>
      <div className={style.container}>
          <h2>Ism Familyangizni kiriting</h2>

          <div className={style.inp}>
            <input type="text" placeholder="Ism" name="" id="" />
            <input type="text" placeholder="Familya" name="" id="" />
          </div>
          <button>Yuklash</button>
      </div>
    </main>
  );
};

export default Admin;
