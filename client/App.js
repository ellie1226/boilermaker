// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import store from './store'
// import Root from './components/Root'

// ReactDOM.render(
//   <Provider store={store}>
//     <Root />
//   </Provider>,
//   document.getElementById('app')
// )
import '../public/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'


ReactDOM.render(
  <Provider store={store}>
    <div>Hello, world!</div>
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);