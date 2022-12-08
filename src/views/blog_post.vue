<template>
  <section class="w-full py-[6%] px-[5%]" >

    <img :src="post.image"
    alt="image address" class="w-full lg:w-4/6" loading="lazy">

    <h2 class="text-3xl font-bold text-gray-800 mt-8">{{ post.title }}</h2>

    <p class="text-xl mt-4 lg:max-w-[70%]">
        <span v-html="post.content"></span>
    </p>

</section>
</template>

<script>
import axios from "axios"


export default {
    name: 'Post',
    data(){
        return{
            post:[]
        };
    },
    async mounted(){
        let result = await axios.get('https://nric-app.herokuapp.com/api/blog_post/'+this.$route.params.slug);
        
        this.post = result.data;
    }
}
</script>