<template>
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
</template>

<script>
    import ProductReview from './ProductReview.vue';
    export default {
        name: "ProductTabs",
        props: {
            reviews: {
                type: Array,
                required: true
            }
        },
        components: {
            ProductReview
        },
        data() {
            return {
                tabs: ['Reviews', 'Make a Review'],
                selectedTab: 'Reviews'
            }
        }
    }
</script>

<style scoped>

</style>
