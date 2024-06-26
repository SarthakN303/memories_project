import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import App from './App.jsx'
import './index.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
