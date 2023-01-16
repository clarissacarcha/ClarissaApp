const initialState = {
  hotelsNearYou: [],
  hotelFacilities: [],
};

export default function hotelsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_HOTELS_NEAR_YOU':
      return {...state, isLoading: true};
    case 'GET_HOTELS_NEAR_YOU_SUCCESS':
      return {
        ...state,
        isLoading: false,
        hotelsNearYou: action.payload ? action.payload.data : [],
      };
    case 'GET_HOTELS_NEAR_YOU_FAIL':
      let error = action.error.data ? action.error.data : action.error;
      return {...state, isLoading: false, hotelsNearYou: error};

    case 'CLEAR_DATA':
      return initialState;

    default:
      return state;
  }
}

export function getHotelsNearYou(params) {
  return {
    type: 'GET_HOTELS_NEAR_YOU',
    payload: {
      request: {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key':
            'd3ff52db5emsha88d19c4acb8fa8p182873jsn14133f850cba',
          'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com',
        },
        url: '/list-by-map',
        params,
      },
    },
  };
}
