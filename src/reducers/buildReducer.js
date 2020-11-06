import { getId } from '../utils/jsUtils';

const build = localStorage.build ? { ...JSON.parse(localStorage.build), id: getId(), location: 0 } : { id: getId(), location: -150 };
const oldBuild = localStorage.oldBuild ? { ...JSON.parse(localStorage.oldBuild), id: getId(), location: 150 } : { id: getId(), location: 0 };

const initialData = { build, oldBuild };

const buildReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'SET_BUILD':
      return { ...state, build: action.build };
    case 'SET_OLD_BUILD':
      return { ...state, oldBuild: action.build };
    default:
      return state;
  }
};

export const setBuild = build => {
  return {
    type: 'SET_BUILD', build
  };
};

export const setOldBuild = build => {
  return {
    type: 'SET_OLD_BUILD', build
  };
};

export default buildReducer;
