const state = {
  cartList: []
};

const getters = {
  getCartList: (state)  => {
    return state.cartList;
  }
};

const mutations = {
  addCartList: (state, payload) => {
    let data =  payload;

    function isNum(json) { 
      return json.id === data.id;
    }

    let activeData = state.cartList.find(isNum);
    let indexData = state.cartList.findIndex(isNum);
    if(!activeData) {
      data["num"] = 1;
      state.cartList.push(data);

    } else {
      if(activeData["id"] == data.id ) {
        console.log("aruyo");
        state.cartList[indexData]["num"]++;
  
       } else {
        data["num"] = 1;
        state.cartList.push(data);
       }
    }
  },
  removeCartItem: (state, index) => {
    state.cartList.splice(index,1);
  }
};

const actions = {
  addCartList: ({ commit }, payload)  => {
    commit('addCartList', payload);
  },
  removeCartItem: ({ commit }, index)  => {
    commit('removeCartItem', index);
  }
};


export default {
  state,
  mutations,
  actions,
  getters
}