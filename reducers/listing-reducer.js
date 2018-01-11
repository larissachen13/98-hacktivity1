import { ListingActionTypes } from '../actions/listing-actions';

const DEFAULT_STATE = { listings: [], error: null, msg: null, favorite: {}, active: null, isActive: null };

const ListingReducer = (listings = DEFAULT_STATE, action) => {
  if (Object.prototype.hasOwnProperty.call(action, 'payload') &&
      Object.prototype.hasOwnProperty.call(action.payload, 'error')) {
    return listings;
  }

  switch (action.type) {
    case ListingActionTypes.GET_ALL_LISTINGS:
      return Object.assign({}, listings, {
        listings: action.payload.listings,
        msg: action.payload.msg,
      });

    case ListingActionTypes.FAVORITE_LISTING:
      const lists = listings.listings;
      const favorite = listings.favorite;
      const active = action.payload.id;

      lists.forEach(listing => {
        if (listing._id === action.payload.id) {
          favorite[action.payload.id] = Object.prototype.hasOwnProperty.call(favorite, action.payload.id) ? !favorite[action.payload.id] : !listing.favorite;
        }
      });

      const isActive = favorite[action.payload.id];

      return { msg: action.payload.msg, listings: lists, favorite, active, isActive };

    case ListingActionTypes.ADD_LISTING:
      return Object.assign({}, listings, {
        msg: action.payload.msg,
        listings: listings.listings.concat([action.payload.listing]),
      });

    case ListingActionTypes.GET_LISTING:
    default:
      return listings;
  }
};

export default ListingReducer;
