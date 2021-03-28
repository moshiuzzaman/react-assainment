import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Authentication from './Components/Authentication/Authentication';
import Cart from './Components/Cart/Cart';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivetRoute from './Components/Authentication/PrivetRoute';
import { SnackbarProvider } from 'notistack';
import ProductDetails from './Components/Home/TrandingProducts/ProductDetails/ProductDetails';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Switch >
          <Route path="/login">
            <Authentication />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/product-view/:id">
            <ProductDetails/>
          </Route>
          <PrivetRoute path="/dashboard">
            <Dashboard />
          </PrivetRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
