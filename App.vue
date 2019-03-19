<template>
    <div>
        <div class="cart">
            <p>Cart({{cartCount}})</p>
        </div>
        <Product :premium="premium" @add-to-cart="updateCart"></Product>
    </div>
</template>

<script>
    import Product from './components/Product.vue'

    export default {
        name: "App",
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

</style>
