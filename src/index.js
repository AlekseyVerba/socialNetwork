
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-state";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';



let renderAll = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store.getState()} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderAll();

store.subscribe(renderAll)








// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
