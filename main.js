/*Vue.component('Product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `<div class="product">
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
                <ProductTabs :reviews="reviews"></ProductTabs>
            </div>
            </div>`,
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
                    variantImage: "http://localhost:63342/vue-project/assets/green-socks.png?_ijt=gnn5dukm5kot1o7ppai38do7os",
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: "./assets/grey-socks.png",
                    variantQuantity: 0
                }
            ],
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct(index) {
            this.selectedVariant = index;
        },
        addReview(productReview) {
            this.reviews.push( )
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
    },
    mounted() {
        eventBus.$on('review-submitted', productReview => {
            this.reviews.push(productReview)
        })
    }
});

Vue.component('ProductReview', {
    template: `
        <form class="review-form" @submit.prevent="onSubmit">
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors">{{error}}</li>
                </ul>
            </p>
          <p>
            <label for="name">Name:</label>
            <input id="name" v-model="name" placeholder="name">
          </p>

          <p>
            <label for="review">Review:</label>
            <textarea id="review" v-model="review"></textarea>
          </p>

          <p>
            <label for="rating">Rating:</label>
            <select id="rating" v-model.number="rating">
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </select>
          </p>

          <p>
            <input type="submit" value="Submit">
          </p>
        </form>
      `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            errors: []
        }
    },
    methods: {
        onSubmit() {
            console.log('this.name && this.review && this.rating', this.name && this.review && this.rating);
            if(this.name && this.review && this.rating) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating
                };
                eventBus.$emit('review-submitted', productReview)
                this.name = null;
                this.review = null
                this.rating = null
            } else {
                console.log('frfr');
                if(!this.rating) this.errors.push('Rating required');
                if(!this.name) this.errors.push('Name required');
                if(!this.review) this.errors.push('Review required');
            }
        }
    }
});*/

/*Vue.component('ProductTabs', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template: `
        <div>
            <div>
              <span class="tab" v-for="(tab, index) in tabs" :key="index"
                    @click="selectedTab = tab" :class="{ activeTab: selectedTab === tab }">
                {{ tab }}
              </span>
            </div>
            <div v-show="selectedTab === 'Reviews'">
                <h2>Reviews</h2>
                <p v-if="!reviews.length">There are no reviews yet.</p>
                <ul v-else>
                    <li v-for="review in reviews">
                        <p>{{review.name}}</p>
                        <p>{{review.rating}}</p>
                        <p>{{review.review}}</p>
                    </li>
                </ul>
            </div>
            <ProductReview  v-show="selectedTab === 'Make a Review'" />
        </div>
      `,
    data() {
        return {
            tabs: ['Reviews', 'Make a Review'],
            selectedTab: 'Reviews'
        }
    }
})*/
import App from './App.vue';

var app = new Vue({
    el: '#app',
    render: h => h(App)
});
