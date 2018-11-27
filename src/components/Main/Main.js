import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WrapperMainView from '../WrapperMainView/WrapperMainView';
import WrapperProfile from '../WrapperProfile/WrapperProfile';

const Main = () => (
    <div>
        <Switch>
            <Route exact path="/" component={WrapperMainView}/>
            <Route exact path="/:id" component={WrapperProfile}/>
        </Switch>
    </div>
)

export default Main;