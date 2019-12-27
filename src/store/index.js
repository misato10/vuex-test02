import Vue from 'vue';
import Vuex from 'vuex';
import itemList from './modules/itemList';
import buy from './modules/buy';
import meta from './modules/meta';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    itemList,
    buy,
    meta
  }
});
