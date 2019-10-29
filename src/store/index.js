import Vue from 'vue';
import Vuex from 'vuex';
//import items from '../assets/json/item.json'
import itemList from './modules/itemList';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    itemList
  }
});


/*export const store = new Vuex.Store({
  state: {
    items: 0,
  },
  getters: {
    AllItems: state => {
      
      return state.items;
    }
  }
});*/

/*const state = {
  name: 'Tanaka'
}

export default new Vuex.Store({
  state: state
})*/
/*
export default new Vuex.Store({
  state: {
    items: items,
  },
  getters: {
    allItems: state => {
      return state.items;
    }
  },
});*/
