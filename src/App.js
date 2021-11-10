import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,  Route} from "react-router-dom";
import Home from './Pages/Home/Home';
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
