import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_CALLS':
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case 'FETCH_CALL':
      return { ...state, [action.payload.id]: action.payload};
    case 'UPDATE_CALL':
      return { ...state, [action.payload.id]: action.payload };
    case 'RESET_CALLS':
      return action.payload;
    default:
      return state;
  };
};
