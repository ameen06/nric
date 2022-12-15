<template>
<section class="w-full lg:w-[80%] max-w-6xl mx-auto py-[6%] px-[5%]" >

    <img :src="`https://ik.imagekit.io/k4cixy45r/nric/blogs/`+post.image"
    alt="image address" class="w-full" loading="lazy">

    <h2 class="text-3xl font-bold text-gray-800 mt-8">{{ post.title }}</h2>

    <div class="text-xl mt-4" v-html="post.content">
    </div>

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
        let result = await axios.get('https://admin.nahjurrashad.com/api/blog-post/'+this.$route.params.slug);
        
        this.post = result.data;
    }
}
</script>