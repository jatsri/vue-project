<template>
    <div id="app">
        <p class="routes">
            <router-link to="/">Home</router-link>
            <router-link to="/review">Review</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>
    .routes {
        display: none;
    }

</style>
