import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register'
import Sidebar from './pages/Home/Sidebar';
function App() {
  return (
      <Router>
        <Switch>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
          <Route path='/'>
            <Sidebar/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
