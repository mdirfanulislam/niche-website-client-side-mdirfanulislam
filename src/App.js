import './App.css';
import { BrowserRouter as Router,Switch,  Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import None from './Pages/None/None';
import Explore from './Pages/Explore/Explore';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
function App() {
  return (
    <div className="App" style={{overflow:'hidden'}}>
      <Router>
        <Switch>
          <Route exact path="/">
           <Home></Home>
          </Route>

          <Route exact path="/home">
           <Home></Home>
          </Route>

          
          <Route exact path="/explore">
         <Explore></Explore>
          </Route>
          <Route exact path="/login">
           <Login></Login>
          </Route>
          <Route exact path="/register">
          <Register></Register>
          </Route>

          <Route exact path="/dashboard">
         <Dashboard></Dashboard>
          </Route>

          <Route exact path="*">
         <None></None>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
