<template>
    <div>
        <h2>Reviews</h2>
        <ul>
            <li v-for="review in reviews">
                <p>{{review.name}}</p>
                <p>{{review.rating}}</p>
                <p>{{review.review}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Reviews',
        props: {
            reviews: {
                type: Array,
                required: true
            }
        }
    }
</script>
