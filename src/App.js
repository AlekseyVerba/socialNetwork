import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from "react-router-dom"
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import UsersContainer from "./components/Users/UsersContainer"

function App(props) {


  return (
    <BrowserRouter >
      <div className="app">
        <Header />
        <div className="down">
          <Navbar />
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/message" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
