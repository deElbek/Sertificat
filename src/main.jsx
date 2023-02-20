import Navbar from "./components/Navbar/navbar";
import { Route, Switch } from "react-router-dom";
import Admin from "./page/admin/Admin";
import Home from './page/home/h'
import Login from './Login/Login'
import Sertifikat from "./page/sertificat/s";

function Main() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path={'/'}>
          <Home/>
        </Route>
        <Route exact path={'/sertificat'}>
          <Sertifikat/>
        </Route>
        <Route exact path={'/login'}>
          <Login/>
        </Route>
        <Route exact path={'/admin'}>
          <Admin/>
        </Route>
      </Switch>
    </>
  );
}

export default Main;
