const initialState = {
  hotelsNearYou: [],
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
        // params: {
        //   arrival_date: '2023-01-14',
        //   departure_date: '2023-01-15',
        //   room_qty: '1',
        //   guest_qty: '1',
        //   bbox: '14.291283,14.948423,120.755688,121.136864',
        // },
      },
    },
  };
}
