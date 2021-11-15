import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from './pages/Home/Home';
import Home from './pages/Home/Home'

import './App.css';
import Explore from "./pages/Explore/Explore";
import Login from "./Login/Login";
import Header from "./pages/Home/Header/Header";
import Register from "./Register/Register";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateRoute from '../src/PrivateRoute/PrivateRoute'
import Purchage from "./pages/Purchage/Purchage";
import Addservices from "./pages/AddServices/AddServices";
import Review from "./pages/Review/Review";
import NotFound from "./pages/NotFound/NotFound";
import Addreview from "./pages/Addreview/Addreview";
import Purchase from "./pages/Purchase/Purchase";
import Deshboard from '../src/pages/Deshboard/Deshboard/Deshboard'
import ManageService from "./pages/ManageService/ManageService";
import Pay from "./pages/Pay/Pay";
import AddProducts from "./pages/AddProducts/AddProducts";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/explore'>
              <Header></Header>
              <Purchage></Purchage>
            </Route>

            <Route path='/login'>
              <Header></Header>
              <Login></Login>
            </Route>

            <Route path='/register'>
              <Header></Header>
              <Register></Register>
            </Route>

            {/* <Route path='/review'>
              <Header></Header>
              <Addreview></Addreview>
            </Route> */}

            <PrivateRoute path="/purchage/:serviceId">
              <Header></Header>
              {/* <Explore></Explore> */}
              <Purchase></Purchase>
            </PrivateRoute>

            <PrivateRoute path="/addreview">
              <Header></Header>
              <Addreview></Addreview>
            </PrivateRoute>
            <PrivateRoute path="/addproduct">
              <Header></Header>
              <AddProducts></AddProducts>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Header></Header>
              <Deshboard></Deshboard>
            </PrivateRoute>
            <PrivateRoute path="/pay">
              <Header></Header>
              <Pay></Pay>
            </PrivateRoute>

            <PrivateRoute path="/mangeservices">
              <Header></Header>
              <ManageService></ManageService>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
