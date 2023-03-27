import { reqNavList } from '@/api/home';
export default {
  namespaced:true,
  state: { category: [] },
  actions: {
    async getCategory({commit,state,dispatch}) {
      const ret = await reqNavList();
      console.log(ret);
      if(ret.data.code === 200) commit('GET_CATEGORY',ret.data.data)
    },
  },
  mutations: {
    GET_CATEGORY(state,category) {
      state.category = category
    }
  },
  getters: {},
};
