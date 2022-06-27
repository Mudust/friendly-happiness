import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

// 响应组建中的动作
const actions = {};
// 操作数据
const mutations = {};
// 存储数据
const state = {};

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
});
