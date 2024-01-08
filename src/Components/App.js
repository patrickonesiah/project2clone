import '../App.css';
import Header from './Header';
import CreateAStory from './CreateAStory';
import DisplayStory from './DisplayStory';
import EditStory from './EditStory';
import Home from './Home';
import {Route, Switch } from "react-router-dom";

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
          <Route path="/DisplayStory/:id">
            <DisplayStory />
          </Route>
          <Route path="/EditStory/:id">
            <EditStory />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
