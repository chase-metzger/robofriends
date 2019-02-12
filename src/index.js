import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
// import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import 'tachyons'
import App from './containers/App'
import './index.css'
import { robots, searchRobots } from './reducers/reducers'
import registerServiceWorker from './registerServiceWorker'

// const logger = createLogger();
// const store = createStore(searchRobots);//, applyMiddleware(logger));
const rootReducer = combineReducers({ searchRobots, robots })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
registerServiceWorker()
