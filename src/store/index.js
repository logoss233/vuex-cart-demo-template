import Vue from 'vue'
import Vuex from 'vuex'
import products from "./modules/products"
import cart from "./modules/cart"

Vue.use(Vuex)
const MyPlugin=store=>{
  store.subscribe((mutation,state)=>{
    if(mutation.type.startsWith("cart/")){
      window.localStorage.setItem('cart-products',JSON.stringify(state.cart.cartProducts))
    }
  })
}


export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    cart,
  },
  plugins:[MyPlugin]
})
