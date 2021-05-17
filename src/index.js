import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux';
//Provides our application with the store
import {Provider} from 'react-redux';
import articleReducer from './redux/reducer/articleReducer'
import categoryFilterReducer from './redux/reducer/categoryFilterReducer'



const store = createStore(
  combineReducers({
    categoryFilter: categoryFilterReducer, articles: articleReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
