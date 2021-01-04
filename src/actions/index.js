import aircallApi from '../apis/aircallApi';

export const fetchCalls = () => async dispatch => {
  const response = await aircallApi.get('/activities');

  dispatch({ type: 'FETCH_CALLS', payload: response.data})
}

export const fetchCall = (id) => async dispatch => {
  const response = await aircallApi.get(`/activities/${id}`);

  dispatch({ type: 'FETCH_CALLS', payload: response.data})
}

export const updateCall = (id) => async dispatch => {
  const response = await aircallApi.post(`/activities/${id}`, {
      is_archived: true
      })

  dispatch({ type: 'UPDATE_CALL', payload: response.data})
  // Do some programmatic navigation
  //
}

export const resetCalls = () => async dispatch => {
  const response = await aircallApi.get('/reset');

  dispatch({ type: 'RESET_CALLS', payload: response.data})
}

