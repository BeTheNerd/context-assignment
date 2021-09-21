import './App.css';
import NavBar from '../components/NavBar.js'
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import UserProfile from '../components/UserProfile';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/users" component={UserProfile} />
      </Switch>
    </div>
  );
}

export default App;
