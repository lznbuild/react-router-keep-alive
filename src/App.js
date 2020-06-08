import React, { Component, useState } from "react";
import KeepAlive, { AliveScope } from "./components/keepAlive";

import {
  BrowserRouter,
  HashRouter,
  Prompt,
  MemoryRouter,
  Route,
  Link
} from 'react-router-dom';


const Page1 = () => {
  const [count,setCount] = useState(0)
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
const Page2 = () => {
  return (
    <div>page22</div>
  )
}


class App extends Component {
  constructor(props) {
    super(props);
  }

  getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message);
    callback(allowTransition);
    console.log(message,'message');
  }

  render() {
    return (
      <div>
        <HashRouter>
          <nav>
            <ul>
              <li>
                <Link to="/page1">page1</Link>
              </li>
              <li>
                <Link to="/page2">page2</Link>
              </li>
            </ul>
          </nav>
          <Route
            path="/page1"
            render={() => (
              <KeepAlive id="Test">
                <Page1 />
              </KeepAlive>
            )}
          />

          <Route component={Page2} path="/page2" />
        </HashRouter>
      </div>
    );
  }
}




export default App;
