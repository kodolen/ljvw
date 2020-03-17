import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

// client.getEntry('?id=oxEXZHHjMWQmL5Zd&contentTypeId=case&contentTypeHidden=false&order.fieldId=updatedAt&order.direction=descending&displayedFieldIds=updatedAt&displayedFieldIds=author')
// .then(function (entry) {
//   // logs the entry metadata
//   console.log(entry.sys)

 
// })

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
