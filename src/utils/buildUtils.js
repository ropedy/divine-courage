import store from '../store';

import heroList from '../../data/heroes';
import bootList from '../../data/boots';
import itemList from '../../data/items';

const itemBL = () => store.getState().settings.itemBlacklist;
const bootsBL = () => store.getState().settings.bootBlacklist;
const heroBL = () => store.getState().settings.heroBlacklist;
const itemWL = () => store.getState().settings.itemWhitelist;
const bootsWL = () => store.getState().settings.bootWhitelist;
const heroWL = () => store.getState().settings.heroWhitelist;

export const listValidators = {
  itemBlacklist: () => itemBL().length > itemList.length - 5 ? 'At least five items must be not blacklisted.' : null,
  bootBlacklist: () => bootsBL().length === bootList.length ? 'All boots cannot be blacklisted.' : null,
  heroBlacklist: () => heroBL().length === heroList.length ? 'All heroes cannot be blacklisted.' : null,
  itemWhitelist: () => itemWL().length < 5 ? 'At least five items must be whitelisted.' : null,
  bootWhitelist: () => bootsWL().length === 0 ? 'At least one pair of boots must be whitelisted.' : null,
  heroWhitelist: () => heroWL().length === 0 ? 'At least one hero must be whitelisted.' : null
};
