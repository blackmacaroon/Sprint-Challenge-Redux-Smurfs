/*
  Be sure to import in all of the action types from `../actions`
*/
import{
  FETCHING,
  FETCH_WIN,
  FETCH_FAIL,
  ADDING,
  ADD_WIN,
  ADD_FAIL
} from '../actions'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this */
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null,
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const smurfReducer = (state = initialState, action) => {
  console.log('reduced', state)
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ''
      };
    case FETCH_WIN:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: ''
      };
    case FETCH_FAIL: 
      return {
        ...state,
        fetchingSmurfs: false,
        error: 'sorry, nope.'
      };
    case ADDING:
      return {
        ...state,
        addingSmurf: true,
        error: ''
      }
    case ADD_WIN:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false,
        error: ''
      }
    case ADD_FAIL:
      return {
        ...state,
        addingSmurf: false,
        error: 'no smurf for you.'
      }
    default:
      return state;
    
  }
    

}

export default smurfReducer;