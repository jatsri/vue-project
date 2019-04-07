<template>
    <div id="app">
        <p>
            <router-link to="/home">Home</router-link>
            <router-link to="/review">Review</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "App1"
    }
</script>

<style scoped>

</style>
