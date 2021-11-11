import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from './pages/Home/Home';
import Home from './pages/Home/Home'

import './App.css';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
