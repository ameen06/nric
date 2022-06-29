<template>
  
<!-- Contact section -->
<section class="w-full py-[6%] px-[5%]">

    <div class="text-center">

        <h1 class="text-5xl font-bold mb-3">Contact Us</h1>
        <p class="text-lg text-gray-400 mb-14">Got anything to on your mind? reach out through this form</p>

        <div class="w-full flex flex-col md:flex-row justify-center items-start gap-10 shadow-2xl p-2">

            <div class="w-full md:w-1/2 text-left p-8 bg-green-500 text-white rounded-2xl">

                <h2 class="text-3xl font-bold mb-4">Contact Information</h2>
                <p class="lg:max-w-[70%] mb-10">
                    For all inquiries, please call our main reception between 9:00AM-6:00AM, Tel: 0480 2837745
                </p>

                <address class="w-full not-italic">
                <div class="max-w-[50%] h-1 mb-4 bg-blue-800"></div>
                <p>
                        NAHJURRASHAD ISLAMIC COLLEGE <br>
                        Affiliated to Darul Huda Islamic University, Chemmad <br>
                        M  ullabad, Chamakkala-PO, Chenthrappinni <br>
                        Thrissur-Kerala, India-680687
                    </p>
                    <br>

                    <i class="bx bxs-phone flex-shrink-0 text-xl text-blue-800 mt-2"></i>
                    <p>Tel: 0480 2837745</p>
                    <p>Ph: 9846902564</p>
                    <br>
                    <i class="bx bxl-gmail flex-shrink-0 text-xl text-blue-800 mt-2"></i>
                    <p>Nahjurrashad@gmail.com</p>
                </address>
            </div>

            <div class="w-full md:w-1/2">
                
                <p class="hidden lg:max-w-[70%] mb-10 text-left">
                    Leave a message through this form and we will get in touch with you as soon as possible.
                </p>

                <form class="flex flex-col" @submit.stop.prevent="submit">

                    <input type="text" placeholder="Your Name..." required v-model="messages.name"
                    class="w-full bg-gray-100 px-2 py-1 border-b border-green-400 text-gray-800 outline-none font-light">
                    <span class="input-errors" v-for="(error, index) of v$.messages.name.$errors" :key="index">
                        <span class="text-sm text-red-600">{{ error.$message }}</span>
                    </span>

                    <input type="email" placeholder="Your Email..." required v-model="messages.email"
                    class="w-full bg-gray-100 px-2 py-1 mt-4 border-b border-green-400 text-gray-800 outline-none font-light">
                    <span class="" v-for="(error, index) of v$.messages.email.$errors" :key="index">
                        <span class="text-sm text-red-600">{{ error.$message }}</span>
                    </span>

                    <textarea cols="30" rows="10" placeholder="Your Message..." required v-model.trim="messages.message"
                    class="w-full bg-gray-100 px-2 py-1 mt-4 border bder-yellgreen 4ext-gray-800 outline-none font-light"></textarea>
                    <span class="input-errors" v-for="(error, index) of v$.messages.message.$errors" :key="index">
                        <span class="text-sm text-red-600">{{ error.$message }}</span>
                    </span>
                    
                    <button type="submit" v-on:click="submitMessage" class="w-[fit-content] px-4 bg-gray-800 text-gray-100 outline-none py-2 mt-3">Send Message</button>
                
                </form>

            </div>

            

        </div>

    </div>

</section>



</template>
<script>
import axios from "axios"
import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  name: "Contact",
  components: {},
  setup () {
    return { v$: useValidate() }
  },
  data(){
    return {
        messages: {
            name:'',
            email:'',
            message:'' 
        }
    }
  },
  validations() {
    return {
        messages: {
            name: {required},
            email: {required, email},
            message: {required}
        }
    }
  },
  methods:{
    async submitMessage(){
        this.v$.$validate()
        if (!this.v$.$error) {
            const result = await axios.post('https://nric-app.herokuapp.com/api/store/contact', {
                name:this.messages.name,
                email:this.messages.email,
                message:this.messages.message
            });
            await this.$router.push('/contact');
        }
    }
  }
};
</script>
