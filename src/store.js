import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    avatar:null
  },
  mutations: {
   setAvatar(state,url){
    // state.avatar=url;
    // sessionStorage.setItem('avatar',url);
    state.avatar="https://alifei03.cfp.cn/creative/vcg/800/version23/VCG41490031879.jpg";
    sessionStorage.setItem('avatar',"https://alifei03.cfp.cn/creative/vcg/800/version23/VCG41490031879.jpg");

   }
  },
  getters:{
    getAvatar(state){
      if(!state.avatar){
        state.avatar =sessionStorage.getItem('avatar')
     }
      return state.avatar;
    }
  },
  actions: {

  }
})
