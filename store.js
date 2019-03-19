import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        cart: [],
        premium: true,
        reviews: [],
        selectedVariant: 0
    },
    mutations: {
        UPDATE_CART(state, payload) {
            state.cart.push(payload.id)
        },
        UPDATE_CURRENT_SELECTION(state, payload) {
            state.selectedVariant = payload.index;
        }
    },
    actions: {
        updateCart(context, payload) {
            context.commit("UPDATE_CART", payload)
        },
        updateCurrentSelection(context, payload) {
            context.commit(" UPDATE_CURRENT_SELECTION", payload)
        }
    },
    getters: {
        getCartCount(state) {
            return state.cart.length
        }
    }
});

export default store;
