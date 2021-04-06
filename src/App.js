import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Norris from './components/Norris';
import Jokes from './components/Jokes';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav/>

      <div className="conteiner">
      <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/norris">
              <Norris/>
            </Route>
            <Route path="/jokes">
              <Jokes/>
            </Route>
          </Switch>

      </div>
      
      
    </div>
    </Router>
  );
}

export default App;
