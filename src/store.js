import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export function createStore () {
    return new Vuex.Store({
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
            },
            ADD_REVIEW(state, payload) {
                state.reviews.push(payload)
            }
        },
        actions: {
            updateCart(context, payload) {
                context.commit("UPDATE_CART", payload)
            },
            updateCurrentSelection(context, payload) {
                context.commit("UPDATE_CURRENT_SELECTION", payload)
            },
            addReview(context,payload) {
                context.commit("ADD_REVIEW", payload)
            }
        },
        getters: {
            getCartCount(state) {
                return state.cart.length
            },
            getReviews(state) {
                return state.reviews;
            }
        }
    });
};
