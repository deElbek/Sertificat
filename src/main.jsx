import Navbar from "./components/Navbar/navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./page/home/h";
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
      </Switch>
    </>
  );
}

export default Main;
