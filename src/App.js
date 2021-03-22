import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Authentication from './Components/Authentication/Authentication';

function App() {
  return (
    <Router>
      <Switch >
        <Route path="/login">
          <Authentication/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
