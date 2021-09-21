import logo from './logo.svg';
import './App.css';
import NavBar from '../components/NavBar.js'
import { Route, Switch } from 'react-router';
import Home from './components/Home';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
