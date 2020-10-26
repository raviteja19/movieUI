import { combineReducers } from 'redux';
import  {Landing,getMovies,moviedetail,keywords,recommendation} from './Reducer';

const rootReducer=combineReducers({Landing,getMovies,moviedetail,keywords,recommendation});

export default rootReducer;