import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { addUpper, logger } from './middlewares'
import { thunk } from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

//aqui estoy convinando endhancers y se los envio al store despues
const composedEndhancers = composeAlt(applyMiddleware(thunk, logger, addUpper)
);


const store = createStore(
  rootReducer, 
  composedEndhancers,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

