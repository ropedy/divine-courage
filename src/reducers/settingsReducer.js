const initialData = {
  heroBlacklist: [],
  bootsBlacklist: [],
  itemBlacklist: [],
  heroWhitelist: [],
  bootsWhitelist: [],
  itemWhitelist: []
};

const settingsReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'SET_LIST':
      return { ...state, [action.name]: action.list };
    default:
      return state;
  }
};

export const setList = (list, name) => {
  return {
    type: 'SET_LIST', list, name
  };
};

export default settingsReducer;
