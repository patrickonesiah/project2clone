import '../App.css';
import {UserProvider} from './UserProfile';
import Header from './Header';
import Stories from './Stories';
import UserProfile from './UserProfile';
import CreateStory from './CreateStory';
import Home from './Home';
import {Route, Switch } from "react-router-dom";

//https://www.objgen.com/json/local/design
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/CreateStory">
            <CreateStory />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
