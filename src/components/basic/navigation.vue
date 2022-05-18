<template>
    <div x-data="{show: false}" x-on:click.away="show = false">
        
        <!-- Header -->
        <header class="w-full px-[8%] py-2">
            <div class="flex justify-between items-center">

                <div class="">
                    <img :src="require('@/assets/Images/nric logo.webp')" alt="" class="h-10">
                </div>
        
                <!-- Navigation -->
                <nav class="hidden md:block">
                    <ul class="flex gap-x-4">
                        <li class="lg:text-lg text-gray-500 font-semibold hover:text-gray-700 "
                        :class="$route.name === 'Home' ? 'text-green-500' : ''">
                            <a href="/">Home</a>
                        </li>
                         <li class="lgtext-lg text-gray-500 font-semibold hover:text-gray-700 focus:text-green-500"
                         :class="$route.name === 'About' ? 'text-green-500' : ''">
                            <a href="/about">About</a>
                        </li>
                         <li class="lgtext-lg text-gray-500 font-semibold hover:text-gray-700 focus:text-green-500">
                            <a href="/">Academics</a>
                        </li>
                         <li class="lgtext-lg text-gray-500 font-semibold hover:text-gray-700 focus:text-green-500">
                            <a href="/">Admission</a>
                        </li>
                         <li class="lgtext-lg text-gray-500 font-semibold hover:text-gray-700 focus:text-green-500" >
                            <a href="/">Trust</a>
                        </li>
                    </ul>
                </nav>
        
                <div class="flex gap-x-4">
                    <div class="hidden md:block px-4 py-2 rounded-full border border-gray-300">
                        <p>India</p>
                    </div>
        
                    <a href="#" class="hidden md:block">
                        <button class="px-4 py-2 rounded-full bg-gray-800 text-white">Donate</button>
                    </a>
                    <button class="block md:hidden focus:text-green-500" x-on:click="show = !show" type="button">
                        <i class='bx bx-menu text-3xl'></i>
                    </button>
                </div>

            </div>
        </header>

        <!-- Mobile navigation bar -->
        <div x-show="show" class="z-50 h-[100%] w-[60%] p-6 bg-white top-0 left-0 overflow-x-hidden fixed">
            <button class="float-right focus:text-red-400" x-on:click="show = !show" type="button">
                <i class='bx bx-x text-3xl'></i>
            </button>
            <ul class="flex flex-col gap-x-4 my-10">
                <li class="text-lg text-gray-400 font-semibold">Service</li>
                <li class="text-lg text-gray-400 font-semibold">About</li>
                <li class="text-lg text-gray-400 font-semibold">Blog</li>
                <li class="text-lg text-gray-400 font-semibold">Company</li>
            </ul>

            <a href="#" class="">
                <button class="px-4 py-2 rounded-full bg-gray-800 text-white">Contact us</button>
            </a>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Navigation',
}
</script>