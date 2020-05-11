import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    cart: [],
    selectedProduct: []
  },
  getters: {
    totalPrice: state => {
      let total = 0;
      state.cart.filter((item) => {
        total += (item.productPrice * item.productQuantity);
      });
      return total;
    }
  },
  mutations: {
    addToCart(state, item){
      state.cart.push(item);

    },
    removeFromCart(state, item){
      let index = state.cart.indexOf(item);
      state.cart.splice(index,1);

  },
    selectProduct(state, openProduct) {
      state.selectedProduct.push(openProduct);
    },
    deselectProduct(state, openProduct){
      let index = state.cart.indexOf(openProduct);
      state.selectedProduct.splice(index,1);
  },

  },
  actions: {
  },
  modules: {
  }
})
