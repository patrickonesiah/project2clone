import '../App.css';
import {UserProvider} from './UserProfile';
import Header from './Header';
import UserProfile from './UserProfile';
import Stories from './Stories';

//https://www.objgen.com/json/local/design
function App() {
  return (
    <div className="App">
      <Header/>
      <UserProfile/>
      <Stories/>
    </div>
  );
}

export default App;
