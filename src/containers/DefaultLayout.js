import React, { Component } from 'react';
import DefaultHeader from './DefaultHeader';
import routes from '../routes';
import {  Redirect ,Route, Switch } from 'react-router-dom';
class DefaultLayout extends Component {
    render() {
        return (
            <div>
                <DefaultHeader />
                <Switch>
                    {routes.map((route, idx) => {
                        return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                            <route.component {...props} />
                        )} />)
                            : (null);
                    },
                    )}
                     <Redirect from="/" to="/module1" />
                </Switch>
            </div>

        );
    }
}

export default DefaultLayout;