<template>
  <Navigation/>
    <slot/>
  <Footer />
</template>

<script>

import Navigation from '@/components/basic/navigation.vue'
import Footer from '@/components/basic/footer.vue'

export default {
    components: {
        Navigation,
        Footer,
    },
}
</script>

<style>

</style>