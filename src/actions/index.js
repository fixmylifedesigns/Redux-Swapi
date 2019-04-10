// we'll need axios
import axios from "axios";
// we'll need to create 3 different action types here.
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
// one for fetching, one for success and one for failure
export const getCharacters = () => {
  return dispatch => {
    // our action creator will be a function that returns a function
    // the url to fetch characters from is `https://swapi.co/api/people/`
    dispatch({ type: FETCH_START });
    axios
      .get(`https://swapi.co/api/people/`)
     
      .then(({ data })=> {
        dispatch({
          type: FETCH_SUCCESS,
          payload: data.results
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_FAIL,
          payload: err
        });
      });
  };
};

// remember that now we have controll over our thunk-based action creator
