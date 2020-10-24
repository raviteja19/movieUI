import React from 'react'
import {Route,Switch} from 'react-router-dom';
import Header from './Header';
import Movie from './src/Movie';
import MovieDetails from './src/MovieDetails'


export default (
        <div>
        <Header/>
        <Switch>
            <Route exact path="/" component={Movie}></Route>
            <Route  path="/moviedetails" component={MovieDetails}></Route>
        </Switch>
        </div>
);