<template>
  <section class="container mx-auto mt-12 py-[5%] px-[5%] text-gray-800">
    <div class="">
      <h2 class="text-2xl font-bold">News & Events</h2>
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
import axios from 'axios';

export default {
    name: 'Blog',
    data(){
        return{
            blogPosts:[],
        };
    },
    async mounted(){
        let result = await axios.get("https://admin.nahjurrashad.com/api/blog-posts");
        this.blogPosts = result.data;
    }
}
</script>