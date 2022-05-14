import react from "react";
import Home from "./component/Home";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./component/css/dashboard.css";
import Login from "./component/Login";
import CreateAccount from "./component/CreateAccount";
import LoginStepOne from "./component/LoginProcess/LoginStepOne";
import LoginStepTwo from "./component/LoginProcess/LoginStepTwo";
import LoginStepThree from "./component/LoginProcess/LoginStepThree";
import LoginStepFour from "./component/LoginProcess/LoginStepFour";
import SigninStepOne from "./component/Signinprocess/SigninStepOne";
import SigninStepTwo from "./component/Signinprocess/SigninStepTwo";
import SigninStepThree from "./component/Signinprocess/SigninStepThree";
import SigninStepFour from "./component/Signinprocess/SigninStepFour";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          {/* <Route exact path="/signup">
            <CreateAccount />
          </Route> */}
          <Route exact path="/loginstepone">
            <LoginStepOne />
          </Route>
          <Route exact path="/loginsteptwo">
            <LoginStepTwo />
          </Route>
          <Route exact path="/loginstepthree">
            <LoginStepThree />
          </Route>
          <Route exact path="/loginstepfour">
            <LoginStepFour />
          </Route>

          <Route exact path="/signinstepone">
            <SigninStepOne />
          </Route>
          <Route exact path="/signinsteptwo">
            <SigninStepTwo />
          </Route>
          <Route exact path="/signinstepthree">
            <SigninStepThree />
          </Route>
          <Route exact path="/signinstepfour">
            <SigninStepFour />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
