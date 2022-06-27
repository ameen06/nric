<template>
  <!-- Slide Show -->
  <Splide :options="options" aria-label="My Favorite Images" class="z-0">
      <SplideSlide>
          <img src="https://live.staticflickr.com/65535/52086525976_184e830294_k.jpg" alt="Sample 2">
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

  <div >
    <article class="hidden w-full auto bg-white shadow-lg flex-col gap-4" v-for="item in list" :key="item.id">
    <figure class="w-full h-auto">
        <a href="#">
            <img :src="item.avatar"
            alt="image address" class="w-20" loading="lazy">
        </a>
    </figure>
    <figcaption class="w-full h-auto p-4 flex flex-col gap-4">
        <div class="w-full h-auto flex items-center justify-between">
            <p class="text-gray-400">
                Published on 6666
                <span class="text-gray-800 font-semibold">date</span>
            </p>
            <p class="hidden"><span class="text-red-600">&hearts;</span> 2k</p>
        </div>
        <div class="w-full max-h-56 overflow-hidden flex flex-col gap-2">
            <a href="#" class="text-blue-500 hover:underline">
                <h1 class="text-2xl font-bold text-gray-800"> {{item.first_name}} </h1>
            </a>
            <p class="text-base overflow-hidden" style="text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical;">
                post content
            </p>
        </div>
    </figcaption>
  </article>
  </div>

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
import axios from "axios"

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Splide,
    SplideSlide,
    About,
    Count
  },

  data(){
    return{
      list:[]
    };
  },
  async mounted(){
    let result = await axios.get("https://reqres.in/api/users?page=1");
    console.warn(result.data.data);
    this.list = result.data.data;
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
    };

    return { images, options };
  },


  

}
</script>
