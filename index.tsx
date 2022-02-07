import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import { Provider } from "react-redux";
import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

interface AppProps { }
interface AppState {
  name: string;
}



const store = createStore(reducers,applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);


// class App extends Component<AppProps, AppState> {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'React'
//     };
//   }

//   render() {
//     return (
//       <div>
//         <Hello name={this.state.name} />
//         <p>
//           Start editing to see some magic happen :)
//         </p>
//       </div>
//     );
//   }
// }

// render(<App />, document.getElementById('root'));
