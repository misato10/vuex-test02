import items from '../../assets/json/item.json'

const state = {
  items: items
};

const getters = {
  allItems: state => {
    return state.items;
  },
};

const mutations = {
};

const actions = {

};

export default {
state,
mutations,
actions,
getters
}