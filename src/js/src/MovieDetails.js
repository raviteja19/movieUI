import React,{useState,useEffect}  from 'react';
import * as allactions from '../actions/allactions'
import {connect} from 'react-redux';
import  {bindActionCreators} from 'redux';
import  {withRouter} from 'react-router-dom'
import  MovieList from './MovieList'

function MovieDetails(props){

    const [moviedata,setMovieData]=useState({})
    const [recom,setRecommendation]=useState([]);
    let len=0;
    useEffect(()=>{
        console.log('movid details');
        console.log(props.location)
       if(props.location.state.movie!=undefined){
        let id=props.location.state.movie;
        props.actions.movieDetails(id);
        props.actions.keywords(id);
        props.actions.getRecommendations(id)
       }

    },[])

    useEffect(()=>{
        setMovieData(props.moviedetail);
       console.log(props)
    },[props.moviedetail])

    useEffect(()=>{
        console.log(props.recommendation)

        if(props.recommendation.results!=undefined)
        setRecommendation(props.recommendation.results)

    },[props.recommendation]);


    const getrecomdetails=(e)=>{
        e.preventDefault();
        let value=e.target.id;
        props.actions.movieDetails(value);
        props.actions.keywords(value);
        props.actions.getRecommendations(value)
        console.log('value in moveide'+value);
    }

    len=Object.keys(moviedata).length;

    if(len==0)
    return (<div></div>);

    if(len>0)
    return (
        <div className="moviedetail">
                <div style={{display:"grid"}}>
                    <img className="imgdetailsize"  
                                src={'//image.tmdb.org/t/p/w220_and_h330_face/'+props.moviedetail.poster_path}>
                    </img>
                </div>
                <div className="overview">
                    <div>
                        <div>
                            <label>Overview</label>
                            <p>{props.moviedetail.overview}</p>
                        </div>
                        
                    </div>
                    <div className="status">
                        <div>
                            <label>Status :</label>
                            <span style={{display:'block'}}>{props.moviedetail.status}</span>
                        </div>
                        <div>
                            <label>Orginal Language:</label>
                            <span style={{display:'block'}}>{props.moviedetail.original_language}</span>
                        </div>
                        <div>
                            <label>Budget:</label>
                            <span style={{display:'block'}}>{'$'+props.moviedetail.budget}</span>
                        </div>
                        <div>
                            <label>Revenue:</label>
                            <span style={{display:'block'}}>{'$'+props.moviedetail.revenue}</span>
                        </div>
                    </div>
                </div>
                
                <div className="keywords">
                            <label>Keywords :</label>
                                {props.keywords.map((data,i)=>{
                                    return (
                                        <div key={data.id+'-'+i} className="name">{data.name}</div>
                                    );
                                })}
                </div>
                <div className="recommendation">
                    <label>Recommendation :</label>
                    <MovieList result={recom} type='list' callfunc={getrecomdetails}/>
                </div>
        </div>
    );

}

const mapStateToProps=(state,props)=>{
    return {
        moviedetail:state.moviedetail,
        keywords:state.keywords,
        recommendation:state.recommendation
            };
}

const mapDispatchToProps=(dispatch)=>{
    return {
        actions: bindActionCreators(allactions, dispatch)
      };
}

export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(MovieDetails)); 
