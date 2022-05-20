<template>
  <Navigation/>
    <div class="z-0">
      <slot/>
    </div>
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