import * as axios from 'axios';

const ROOT_URL = 'http://localhost:9090/api';

export const ListingActionTypes = {
  GET_ALL_LISTINGS: 'GET_ALL_LISTINGS',
  GET_LISTING: 'GET_LISTING',
  FAVORITE_LISTING: 'FAVORITE_LISTING',
  ADD_LISTING: 'ADD_LISTING',
};

export const getAllListings = () => {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/listing`)
    .then(response => {
      console.log(response.data);
      dispatch({
        type: ListingActionTypes.GET_ALL_LISTINGS,
        payload: response.data,
      });
    })
    .catch(error => { console.log(error); });
  };
};

export const addListing = (title, price) => {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/listing`, { title, price })
    .then(response => {
      dispatch({
        type: ListingActionTypes.ADD_LISTING,
        payload: response.data,
      });
    })
    .catch(error => { console.log(error); });
  };
};

export const favoriteListing = (id) => {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/listing/${id}`)
    .then(response => {
      dispatch({
        type: ListingActionTypes.FAVORITE_LISTING,
        id,
        payload: response.data,
      });
    })
    .catch(error => { console.log(error); });
  };
};
