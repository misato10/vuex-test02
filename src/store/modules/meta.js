const state = {
  meta:[
    {
      metaTittle: "SHOP DEMO",
      metaDomain: "https://misato-vuex-shop.netlify.com"
    }
  ]
};

const getters = {
  metas: state => {
    return state.meta;
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