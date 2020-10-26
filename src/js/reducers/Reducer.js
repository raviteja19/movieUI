export  function Landing(state = {}, action) {
    switch (action.type) {
      
      case 'getData':
        return {...action.data};
  
        case 'setData':
        return {...action.data}
      default:
        return state;
    }
  }

  export const getMovies=(state={},action)=>{
    switch (action.type) {
      
      case 'getMovies':
        return {...state,...action.data};
  
        case 'setData':
        return {...{},...action.data}
      default:
        return state;
    } 
  }

  export const moviedetail=(state={},action)=>{
    switch (action.type) {
      
      case 'moviedetails':
        return {...state,...action.data};
  
      default:
        return state;
    }
  }

  export const keywords=(state=[],action)=>{
    switch (action.type) {
      
      case 'keywords':
        console.log(action.data)
        return action.data.keywords;
  
      default:
        return state;
    }
  }

  export const recommendation=(state={},action)=>{
    switch (action.type) {
      
      case 'recommendation':
        return {...state,...action.data}
  
      default:
        return state;
    }
  }