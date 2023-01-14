const INITIAL_STATE = {
  latitude: null,
  longitude: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SAVE_CURRENT_LOCATION':
      return {...state, ...action.payload};

    default:
      return state;
  }
};
