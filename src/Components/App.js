import '../App.css';
import {UserProvider} from './UserProfile';
import Header from './Header';
import CreateAStory from './CreateAStory';
import DisplayStory from './DisplayStory';
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
          <Route path="/CreateAStory">
            <CreateAStory />
          </Route>
          <Route path="/DisplayStory">
            <DisplayStory />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
