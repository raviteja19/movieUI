import  React from 'react';
import  {withRouter} from 'react-router-dom'

const MovieList=(props)=>{

    const movieDetails=(e)=>{
        e.preventDefault();
        let value=e.target.id;
        console.log('pushig to '+value)
        props.history.push({
            pathname: '/moviedetails',
                state:{
                    movie: value 
                }
        })
    }

    return (
        <div className="movielist">
                {props.result.map((data,i)=>{
                    return (
                        <div key={i+'-'+data.id} className="moviename"  >
                            <img className="imgsize" id={data.id} onClick={props.callfunc}
                            src={'//image.tmdb.org/t/p/w220_and_h330_face/'+data.poster_path}>
                            </img>
                            <div className="title">{data.title.indexOf(':')&&data.title.length>50?data.title.split(':')[0]:data.title}</div>
                            {props.type=='list'?<div className="date">{data.release_date}</div>:null}
                        </div>
                    );
                })}

            </div>
    );
}

export default withRouter(MovieList);