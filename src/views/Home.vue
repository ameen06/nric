<template>
  <!-- Slide Show -->
  <Splide :options="options" aria-label="My Favorite Images" class="z-0">
      <SplideSlide v-for="slide in slides" :key="slide.id">
          <img :src="slide.image" alt="Sample 2">
      </SplideSlide>
  </Splide>

  <About />

  <Count />

  <section v-if="blogPosts.length !== 0" class="container mx-auto py-[5%] px-[5%] text-gray-800">
    <div class="flex justify-between">
      <h2 class="text-2xl font-bold">News & Events</h2>
      <a href="/blog" class="text-blue-500 font-medium">View all</a>
    </div>
    <div class="mt-8 grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <article class="w-full auto bg-white shadow-lg flex-col gap-4" v-for="post in blogPosts" :key="post.id">
        <figure class="w-full h-auto">
            <router-link :to="'/blog_post/'+ post.id">
                <img :src="post.image"
                alt="image address" class="w-full" loading="lazy">
            </router-link>
        </figure>
        <figcaption class="w-full h-auto p-4 flex flex-col gap-4">
            <div class="hidden w-full h-auto items-center justify-between">
                <p class="text-gray-400">
                    Published on 
                    <span class="text-gray-800 font-semibold">{{post.created_at}}</span>
                </p>
                <p class="hidden"><span class="text-red-600">&hearts;</span> 2k</p>
            </div>
            <div class="w-full max-h-56 overflow-hidden flex flex-col gap-2">
                <router-link :to="'/blog_post/'+ post.id" class="text-blue-500 hover:underline">
                    <h1 class="text-xl font-bold text-gray-800"> {{post.title}} </h1>
                </router-link>
                <p class="text-base overflow-hidden" style="text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical;">
                    <span v-html="post.content"></span>
                </p>
            </div>
        </figcaption>
      </article>
    </div>
  </section>

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
      blogPosts:[],
      slides:[]
    };
  },
  async mounted(){
    let result = await axios.get("https://nric-app.herokuapp.com/api/latest_posts");
    this.blogPosts = result.data;

    let slide = await axios.get("https://nric-app.herokuapp.com/api/slides");
    this.slides = slide.data;
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
