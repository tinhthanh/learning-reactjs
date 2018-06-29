import React, { Component } from 'react';
import { TodoList, Home, Error404 } from './views';
import { HashRouter, Route, Switch } from 'react-router-dom';
import  DefaultLayout  from './containers/DefaultLayout';
class App extends Component {
  render() {
    return (
      <HashRouter>
          <Switch>
           
            <Route path="/todo-list" component={TodoList} />
            <Route path="/module2" component={Home} />
            <Route path="/" component={DefaultLayout}  />
             <Route component={Error404} />
          </Switch>
      </HashRouter>
    );
  }
}
export default App;