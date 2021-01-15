import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isOpenLogPanel:false,
  },
  mutations: {
    // 专门存放更新 state 中的值的方法
    OpenLogPanel(state,params){
      state.isOpenLogPanel = params;
    }
  },
  actions: {//异步操作
  },
  getters:{},     //计算属性
  modules: {//模块
  }
})
