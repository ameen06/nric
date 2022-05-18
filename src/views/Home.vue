<template>
  <!-- Slide Show -->
  <Splide :options="options" aria-label="My Favorite Images" class="z-0">
      <SplideSlide>
          <img :src="images.slide1" alt="Sample 2">
      </SplideSlide>
      <SplideSlide>
          <img :src="images.slide2" alt="Sample 2">
      </SplideSlide>
      <SplideSlide>
          <img :src="images.slide3" alt="Sample 2">
      </SplideSlide>
      <SplideSlide>
          <img :src="images.slide4" alt="Sample 2">
      </SplideSlide>
  </Splide>

  <About />

  <Count />

</template>

<script>
// Images
import Slide1 from "@/assets/Images/slide1.webp"
import Slide2 from "@/assets/Images/toppers.webp"
import Slide3 from "@/assets/Images/senior.webp"
import Slide4 from "@/assets/Images/degree.webp"

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import About from "../components/about.vue"
import Count from "../components/home/count.vue"

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Splide,
    SplideSlide,
    About,
    Count
},

  setup() {
    const images = {
      slide1: Slide1,
      slide2: Slide2,
      slide3: Slide3,
      slide4: Slide4,
    };
    const options = {
      rewind: true,
      autoplay: true,
      arrows: false,
    }

    return { images, options };
  },
}
</script>
