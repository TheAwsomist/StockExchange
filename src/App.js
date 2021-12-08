import "./App.css";
import ForgotPage from "./components/pages/ForgotPassword";
import Layout from "./components/pages/Layout";
import LoginPage from "./components/pages/LoginPage";
import NewPasswordPage from "./components/pages/NewPasswordPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CallCreationPage from "./components/pages/CallCreationPage";
import Orders from "./components/pages/Orders";
import Executed from "./components/pages/Executed";
import AlertBox from "./components/NewPasswordAlertBox";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route exact path="/"/>
            <LoginPage />
          <Route path="/forgot">
            <ForgotPage/>
          </Route>
          <Route>
            <Layout>
              <Route path="/CallCreate">
                <CallCreationPage/>
              </Route>
              <Route path="/Orders">
                <Orders/>
              </Route>
              <Route path="/Executed">
                <Executed/>
              </Route>
            </Layout>
          </Route>
        </Switch>
      </Router> */}
      {/* <NewPasswordPage /> */}
      {/* <Layout/> */}
      {/* <AlertBox/> */}
    </div>
  );
}

export default App;
