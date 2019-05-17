import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING = 'FETCH';
export const FETCH_WIN = 'FETCH_WIN';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADDING = 'ADDING';
export const ADD_WIN = 'ADD_WIN';
export const ADD_FAIL = 'ADD_FAIL';
export const UPDATING = 'UPDATING';
export const DELETING = 'DELETING';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });
  return axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log('fetched!', res)
      dispatch({ type: FETCH_WIN, payload: res.data })
    })
    .catch (err => {
      console.log('fetch fail', err)
      dispatch({ type: FETCH_FAIL, payload: err})
    })
}