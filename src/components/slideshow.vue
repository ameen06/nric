<template>
    <!-- Slide Show -->
    <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
        <SplideSlide>
            <img src="https://images.unsplash.com/photo-1652814961115-055d41eb1cab?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632" alt="Sample 1">
        </SplideSlide>
        <SplideSlide>
            <img src="https://images.unsplash.com/photo-1652814961115-055d41eb1cab?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632" alt="Sample 2">
        </SplideSlide>
    </Splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';


export default {
    name: 'SlideShow',
    components: {
        Splide,
        SplideSlide,
    }
}

</script>

<style>

</style>