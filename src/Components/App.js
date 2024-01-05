import '../App.css';
import Header from './Header';
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
