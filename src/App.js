import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Counter from "./components/Counter"
import Users from "./components/Users"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  debugger;
  return (
    

    <Router>

    <Navbar/>
    
      <Switch>

      <Route path="/" exact component={Header}/>

      <Route path="/About" component={About}/>

      <Route path="/Counter" component={Counter}/>

      <Route path="/Users" component={Users}/>

      </Switch>
    
    </Router>
  );
}

export default App;
