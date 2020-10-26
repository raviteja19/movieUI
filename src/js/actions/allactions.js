

import Axios from 'axios'

export const getData=()=>
{

    return (dispatch)=>{
        return getJsonData()
        .then((res)=>{
           
            dispatch({type:'getData',data:res.data})
        }).catch((err)=>{

        })
    }
}

export const getResult=()=>{
let url="https://api.themoviedb.org/3/movie/upcoming?api_key=4bf7be02d7288228d46c4c60f04943b8&language=en-US&page=1";
return(dispatch)=>{
        Axios.get(url).then((res)=>{

          dispatch({type:'getMovies',data:res.data})  
        }).catch((err)=>{

        })
    }
}


export const getSerachMovies=(moviename)=>
{
    let url='https://api.themoviedb.org/3/search/movie?api_key=4bf7be02d7288228d46c4c60f04943b8&language=en-US&query='+moviename+'&page=1&include_adult=false';
    return (dispatch)=>{
        Axios.get(url).then((res)=>{
            dispatch({type:'getMovies',data:res.data})
        }).catch((err)=>{

        })
    }
}


export const movieDetails=(id)=>{

    let url="https://api.themoviedb.org/3/movie/"+id+"?api_key=4bf7be02d7288228d46c4c60f04943b8&language=en-US";
        return (dispatch)=>{
            Axios.get(url).then((res)=>{
                dispatch({type:'moviedetails',data:res.data})
            }).catch((err)=>{

            })
        }
}

export const keywords=(id)=>{
    let url="https://api.themoviedb.org/3/movie/"+id+"/keywords?api_key=4bf7be02d7288228d46c4c60f04943b8";
    return (dispatch)=>{
        Axios.get(url).then((res)=>{
            dispatch({type:'keywords',data:res.data})
        }).catch((err)=>{

        })
    }
}

export const getRecommendations=(id)=>{

    let url='https://api.themoviedb.org/3/movie/'+id+'/recommendations?api_key=4bf7be02d7288228d46c4c60f04943b8&language=en-US&page=1';

    return (dispatch)=>{
        Axios.get(url)
        .then((res)=>{
            dispatch({type:'recommendation',data:res.data})
        }).catch((err)=>{

        })
    }

}

async function getJsonData(){
    let response = await fetch('/src/js/actions/data.json');
  let user = await response.json();
 
return user;
      
}


export const chartData=(dataval)=>{
   
    return (dispatch)=>{
        dispatch({type:'setData',data:dataval})
    }
}