<template>
  <!-- Slide Show -->
  <section class="w-full 2xl:container 2xl:mx-auto">
    <Splide v-if="mainSlides.length !== 0" :options="options" aria-label="My Favorite Images" class="z-0">
        <SplideSlide v-for="slide in mainSlides" :key="slide.id">
            <img :src="`https://ik.imagekit.io/k4cixy45r/nric/slides/`+slide.image" alt="Sample 2">
        </SplideSlide>
    </Splide>
  </section>

  <section class="container mx-auto py-[5%] px-[5%] flex justify-between items-center flex-col lg:flex-row">

    <div class="lg:w-[45%]">
        <h1 class="text-2xl md:text-6xl md:leading-normal font-bold max-w-xl">We rise the <span class="text-green-500">spiritual leaders</span> of all time</h1>

        <p class="text-md md:text-lg text-gray-500 my-4 overflow-hidden" style="text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 6; -webkit-box-orient: vertical;">
            Nahjurrashad Islamic College is an academic juncture between Islamic and modern forms of 
            education which follows the syllabus of Darul Huda Islamic University, Chemmad. Accordingly, 
            NRIC aims to educate and prepare capable, intellectual and spiritual Islamic scholars, who 
            can handle both the religious and secular issues, which the time demands. It also ensures 
            the academic excellence in Islamic learning, teaching, research and publications. NRIC is 
            founded upon the educational philosophy of Islam which in turn is inspired by the principles 
            of hierarchy and unity of knowledge in its intents and methods. So, we recognize that the 
            knowledge should be acquired internalized and propagated for the sake of Allah the almighty. 
            This booklet will guide you through the educational philosophy, vision and mission; and various 
            academic programs by the institution.
        </p><a href="/about" class="text-blue-600"> Read full</a>
    </div>

    <div class="w-full lg:max-w-md xl:max-w-lg mt-4 lg:mt-2 bg-white">
        <div class=" shadow-lg p-2 rounded-2xl">
            <img src="https://res.cloudinary.com/dzcqawlpe/image/upload/v1671439613/nahjurrashad/home-hero-img_lh2bxk.jpg"
            class="w-full rounded-xl" alt="Class one group pic" loading="lazy">
        </div>
    </div>

  </section>

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
                <img :src="`https://ik.imagekit.io/k4cixy45r/nric/blogs/`+post.image"
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
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import Count from "@/components/home/count.vue";
import axios from "axios";

export default {
  name: 'Home',
  components: {
    Splide,
    SplideSlide,
    Count
  },
  data(){
    return{
      blogPosts:[],
      mainSlides:[]
    };
  },
  methods: {
    async getSlides(){
      await axios.get("https://admin.nahjurrashad.com/api/slides").then((value) => {
          this.mainSlides = value.data;
      },function(error) { console.log(error) });
    },
    async getBlogPosts(){
      await axios.get("https://admin.nahjurrashad.com/api/latest-posts").then((value) => {
        this.blogPosts = value.data;
      },function(error) { console.log(error) });
    }
  },
  async mounted() {
    await axios.get('https://admin.nahjurrashad.com/sanctum/csrf-cookie');
    await this.getSlides();
    await this.getBlogPosts();
  },
  

  setup() {
    const options = {
      rewind: true,
      autoplay: true,
      arrows: true,
    };

    return { options };
  },
}
</script>
