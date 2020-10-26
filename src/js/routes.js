import React,{Fragment} from 'react'
import {Route,Switch} from 'react-router-dom';
import Header from './src/Header'
import Movie from './src/Movie';
import MovieDetails from './src/MovieDetails'


export default (
        <Fragment>
        <Header/>
        <Switch>
            <Route exact path="/" component={Movie}></Route>
            <Route  path="/moviedetails" component={MovieDetails}></Route>
        </Switch>
        </Fragment>
);