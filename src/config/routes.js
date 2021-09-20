import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home'
import Search from '../Pages/Search'
import Trending from '../Pages/Trending';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route exact path='/trending' component={ Trending }/>
  </Switch>
)