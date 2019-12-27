const state = {
  counter: 0,
  cartList: []

};

const getters = {
  doubleCounter: state => {
    return state.counter * 2;
  },
  getCartList: (state)  => {
    return state.cartList;
  }
};

const mutations = {
  addCartList: (state, payload) => {
    state.cartList.push(payload);

  },
  increment: (state, payload) => {
    state.counter +=payload;
  },
};

const actions = {
  addCartList: ({ commit }, payload)  => {
    commit('addCartList', payload);
  },
  increment: ({ commit }, payload) => {
    commit('increment', payload);
  }
};


export default {
  state,
  mutations,
  actions,
  getters
}