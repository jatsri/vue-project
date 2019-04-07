<template>
    <div class="product">
        <div class="product-image">
            <img v-bind:src="image" v-bind:alt="altText"/>
        </div>
        <div class="product-info">
            <h1>{{title}}</h1>
            <p v-show="inStock">In stock</p>
            <p v-show="inStock === 0">Out of stock</p>
            <p>Shipping: {{shipping}}</p>
            <ul>
                <li v-for="detail in details">{{detail}}</li>
            </ul>
            <div v-for="(variant, index) in variants" :key="variant.variantId"
                 class="color-box"
                 :style="{ backgroundColor: variant.variantColor}"
                 @mouseover="updateProduct(index)">
            </div>
            <button v-on:click="addToCart" :disabled="!inStock  ">Add to cart</button>
        </div>
    </div>
</template>

<script>
    import ProductTabs from './ProductTabs.vue';

    export default {
        name: "Product",
        props: {
            premium: {
                type: Boolean,
                required: true
            }
        },
        components: {
            ProductTabs
        },
        data() {
            return {
                brand: "Vue mastery",
                product: "Socks",
                selectedVariant: 0,
                altText: "socks-image",
                inventory: 0,
                details: ["80% cotton", "20% polyester", "Gender-neutral"],
                variants: [
                    {
                        variantId: 2234,
                        variantColor: "green",
                        variantImage: require('../assets/green-socks.png'),
                        variantQuantity: 10
                    },
                    {
                        variantId: 2235,
                        variantColor: "blue",
                        variantImage: require('../assets/grey-socks.png'),
                        variantQuantity: 0
                    }
                ]
            }
        },
        methods: {
            addToCart() {
                this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
            },
            updateProduct(index) {
                this.selectedVariant = index;
            }
        },
        computed: {
            title() {
                return this.brand + '' + this.product
            },
            image() {
                return this.variants[this.selectedVariant].variantImage
            },
            inStock() {
                return this.variants[this.selectedVariant].variantQuantity
            },
            shipping() {
                if (this.premium) {
                    return 'Free'
                }
                return 2.90;
            }
        }
    }
</script>

<style scoped>
.product-image {
    width: 200px;
    height: 200px;
}

img {
    width: 100%;
}

.color-box {
    width: 40px;
    height: 40px;
    margin-top: 5px;
    cursor: pointer;
}
</style>
