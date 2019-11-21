import Vue from 'vue';
import Vuex from 'vuex';
//import items from '../assets/json/item.json'
import itemList from './modules/itemList';
import meta from './modules/meta';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    itemList,
    meta
  }
});
