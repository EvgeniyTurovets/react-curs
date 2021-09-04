import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';

let renderTree = (state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <App 
        state={store.getState()} 
        dispatch={store.dispatch.bind(store)} 
        store={store}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderTree(store.getState())
store.subscribe(()=>{
  let state = store.getState()
  renderTree(state)
})