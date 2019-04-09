<template>
    <div>
        <Product :premium="premium" @add-to-cart="updateCart"></Product>
        <div class="cart">
            <p>Cart({{cartCount}})</p>
        </div>
    </div>
</template>

<script>
    import Product from './Product.vue'

    export default {
        name: "ProductIndex",
        components: {
            Product
        },
        data() {
            return {
                premium: this.$store.state.premium
            }
        },
        methods: {
            updateCart(id) {
                return this.$store.dispatch('updateCart', { id })
            }
        },
        computed: {
            cartCount() {
                return this.$store.getters.getCartCount
            }
        }
    }
</script>

<style scoped>
    .cart {
        position: absolute;
        top: 0;
        right: 0;
    }

</style>
