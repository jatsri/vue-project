<template>
    <div>
        <div>
              <span class="tab" v-for="(tab, index) in tabs" :key="index"
                    @click="selectedTab = tab" :class="{ activeTab: selectedTab === tab }">
                {{ tab }}
              </span>
        </div>
        <div v-show="selectedTab === 'Reviews'">
            <Reviews :reviews="reviews"/>
        </div>
        <ProductReview  v-show="selectedTab === 'Make a Review'" />
    </div>
</template>

<script>
    import ProductReview from './ProductReview.vue';
    import Reviews from './Reviews.vue';
    import eventBus from '../../lib/eventBus';

    export default {
        name: "ProductTabs",
        components: {
            ProductReview,
            Reviews
        },
        data() {
            return {
                tabs: ['Reviews', 'Make a Review'],
                selectedTab: 'Reviews',
                reviews: this.$store.getters.getReviews
            }
        },
        mounted() {
            eventBus.$on('review-submitted', productReview => {
                return this.$store.dispatch('addReview', productReview)
            })
        }
    }
</script>

<style scoped>
    .activeTab {
        color: blue;
    }

    .tab {
        cursor: pointer;
    }

</style>
