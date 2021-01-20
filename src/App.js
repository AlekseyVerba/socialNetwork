import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from "react-router-dom"
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';

function App(props) {

  const el = props.store.dispatch;
  debugger
  return (
    <BrowserRouter >
      <div className="app">
        <Header />
        <div className="down">
          <Navbar />
          <Route path="/profile" render={() => <Profile store={props.store} dispatch={props.dispatch} />} />
          {/* <Route path="/message" render={() => <Dialogs state={messagesPage} dispatch={props.dispatch} />} /> */}
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
