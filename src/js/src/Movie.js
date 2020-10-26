import React,{useState,useEffect} from 'react';
import * as allactions from '../actions/allactions'
import {connect} from 'react-redux';
import  {bindActionCreators} from 'redux';
import  {withRouter} from 'react-router-dom'
import  MovieList from './MovieList'

const  Movie=(props)=>
{

    const [movieresult,setResult]=useState([]);
    const [category,setcategory]=useState('new');
    const categorytypes=[{id:'new',value:'New'},{id:'upcoming',value:'Upcoming'},{id:'action',value:'Action'}
    ,{id:'comedy',value:'Comedy'},{id:'crime',value:'Crime'},{id:'drama',value:'Drama'},{id:'thriller',value:'Thriller'},
    {id:'scifi',value:'Sci Fi'},{id:'family',value:'Family'},{id:'horror',value:'Horror'}];
    const [moviename,setMoviename]=useState('');

useEffect(()=>{
    props.actions.getResult();
},[])

useEffect(()=>{

    if(props.getMovies.results!=undefined)
     setResult(props.getMovies.results)

},[props.getMovies])

const setcategoryValue=(e)=>{
    e.preventDefault();
    let value=e.target.id;
    setcategory(value)
}

const onMovieChange=(e)=>{
    e.preventDefault();
    let value=e.target.value;
    setMoviename(value)
}

const onMovieSearch=(e)=>{
    e.preventDefault();
    
    if(moviename.length>0||moviename!='')
    props.actions.getSerachMovies(moviename);
}

const movieDetails=(e)=>{
    e.preventDefault();
    let value=e.target.id;
    
    props.history.push({
        pathname: '/moviedetails',
            state:{
                movie: value 
            }
    })
}

    return (
        <div className="movie">
            <div className="serachbox">
                <div className="text">Find perfect movie for <label>evening</label></div>
                <div className="search">
                    <div className=""></div>
                    <div className="input-group ">
                        <span className="input-group-addon"><i className="fa fa-search"></i></span>
                        <input id="movie" type="search" className="form-control" name="movie"
                        value={moviename}
                        onChange={onMovieChange}
                         placeholder="search movies"/>
                    </div>
                    <div className="input-group">
                        <button type="button" className="btn btn-danger custom" onClick={onMovieSearch}>Search</button>
                    </div>
                </div>
            </div>
            <div>
                <span className="browsetext">Browse movies by category</span>
            </div>
            <div className="category">
                {categorytypes.map((data,i)=>{
                    return (
                        <span id={data.id} style={{opacity:(category!=data.id)?'0.54':'1'}} 
                        className="type"
                        key={i+'-'+data.id}
                        onClick={setcategoryValue}
                        >{data.value}</span>
                    );
                })}
            </div>
            <MovieList result={movieresult} type='list' callfunc={movieDetails}/>
            
        </div>
    );

}

const mapStateToProps=(state,props)=>{
    return {
        getMovies:state.getMovies
            };
}

const mapDispatchToProps=(dispatch)=>{
    return {
        actions: bindActionCreators(allactions, dispatch)
      };
}

export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(Movie)); 