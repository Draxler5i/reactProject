import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProfileUser from '../ProfileUser/ProfileUser';
import CommentsPost from '../CommentsPost/CommentsPost';
import WrapperMainView from '../WrapperMainView/WrapperMainView';

const Main = () => (
    <div>
        <Switch>
            <Route exact path="/" component={WrapperMainView}/>
            <Route exact path="/:id" component={ProfileUser}/>
        </Switch>
    </div>
)

export default Main;