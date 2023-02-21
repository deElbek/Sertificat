import { Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Navbar from "./components/Navbar/navbar";
import Home from './page/home/h'
import Sertifikat from "./page/sertificat/s";
import Total from "./page/sertificatTotal/Total";
import SignIN from "./auth/in";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function Main() {

  const [search, setSearch] = useState([])
  const [show, setShow] = useState([])

  if (search.length < 8) {
    return (
      <>
        <ToastContainer autoClose={1500} position={"top-center"} />
        <Navbar show={show} setShow={setShow} search={search} setSearch={setSearch} />
        <Switch>
          <Route exact path={'/'}>
            <Home />
          </Route>
          <Route exact path={'/admin'}>
            {/* <Admin/> */}
            <SignIN />
          </Route>
          <Route exact path={'/users'}>
            <Total />
          </Route>
        </Switch>
        {/* <Search/> */}
      </>
    );
  }
  else {
    return (
      <>
        <ToastContainer autoClose={1500} position={"top-center"} />
        <Navbar show={show} setShow={setShow} search={search} setSearch={setSearch} />
        <Switch>
          <Route exact path={'/'}>
            <Sertifikat show={show} setShow={setShow} search={search} setSearch={setSearch} />
          </Route>
          <Route exact path={'/admin'}>
            {/* <Admin/> */}
            <SignIN />
          </Route>
          <Route exact path={'/users'}>
            <Total />
          </Route>
        </Switch>
        {/* <Search/> */}
      </>
    );
  }
}

export default Main;
