import { reqNavList } from '@/api/home';
export default {
  namespaced:true,
  state: { category: [] },
  actions: {
    async getCategory({commit,state,dispatch}) {
      const ret = await reqNavList();
      if(ret.data.code === 200) commit('GET_CATEGORY',ret.data.data)
    },
  },
  mutations: {
    GET_CATEGORY(state,category) {
      category.pop()
      category.pop()
      state.category = category
    }
  },
  getters: {},
};
