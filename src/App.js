import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from './pages/Home/Home';
import Home from './pages/Home/Home'

import './App.css';
import Explore from "./pages/Explore/Explore";
import Login from "./Login/Login";
import Header from "./pages/Home/Header/Header";
import Register from "./Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/explore'>
            <Explore></Explore>
          </Route>
          <Route path='/login'>
            <Header></Header>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Header></Header>
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
