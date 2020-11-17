const initialData = {
  heroBlacklist: [],
  bootBlacklist: [],
  itemBlacklist: [],
  heroWhitelist: [],
  bootWhitelist: [],
  itemWhitelist: [],
  itemSetting: 0,
  heroSetting: 0
};

const settingsReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'SET_LIST':
      return { ...state, [action.name]: action.list };
    case 'SET_ITEM_SETTING':
      return { ...state, itemSetting: action.setting };
    case 'SET_HERO_SETTING':
      return { ...state, heroSetting: action.setting };
    default:
      return state;
  }
};

export const setList = (list, name) => {
  return {
    type: 'SET_LIST', list, name
  };
};

export const setItemSetting = setting => {
  return {
    type: 'SET_ITEM_SETTING', setting
  };
};

export const setHeroSetting = setting => {
  return {
    type: 'SET_HERO_SETTING', setting
  };
};

export default settingsReducer;
