import React, { Component } from 'react';
import { NavLink }  from 'react-router-dom';
class DefaultHeader extends Component {
    render() {
        return (
            <div>
              <NavLink activeStyle={{ color: 'red' }} to="" >Home </NavLink>
              <NavLink to="/todo-list" >Todo List </NavLink>
            </div>
        );
    }
}

export default DefaultHeader;