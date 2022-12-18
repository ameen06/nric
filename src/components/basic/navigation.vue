<template>
    <div x-data="{show: false}" x-on:click.away="show = false">
        
        <!-- Header -->
        <header class="w-full shadow-md">
            <div class="container mx-auto px-[5%] py-3 flex justify-between items-center">

                <div class="">
                    <img :src="require('@/assets/Images/nric logo.webp')" alt="" class="h-11">
                </div>
        
                <!-- Navigation -->
                <nav class="hidden md:block">
                    <ul class="flex gap-x-6">
                        <li class="lg:text-lg font-semibold hover:text-gray-700 "
                        :class="$route.name === 'Home' ? 'text-green-500' : 'text-gray-500'">
                            <a href="/">Home</a>
                        </li>
                         <li class="lg:text-lg font-semibold hover:text-gray-700 focus:text-green-500 "
                         :class="$route.name === 'About' ? 'text-green-500' : 'text-gray-500'">
                            <a href="/about">About</a>
                        </li>
                        <li v-if="$route.name !== 'Home'" class="lg:text-lg font-semibold hover:text-gray-700 focus:text-green-500 "
                         :class="$route.name === 'Blog' ? 'text-green-500' : 'text-gray-500'">
                            <a href="/blog">News & Events</a>
                        </li>
                         <li class="lg:text-lg font-semibold hover:text-gray-700 focus:text-green-500 "
                         :class="$route.name === 'Academics' ? 'text-green-500' : 'text-gray-500'">
                            <a href="/academics">Academics</a>
                        </li>
                         <li class="lg:text-lg font-semibold hover:text-gray-700 focus:text-green-500 "
                         :class="$route.name === 'Admission' ? 'text-green-500' : 'text-gray-500'">
                            <a href="/admission">Admission</a>
                        </li>
                         <li class="lg:text-lg font-semibold hover:text-gray-700 focus:text-green-500 "
                         :class="$route.name === 'Trust' ? 'text-green-500' : 'text-gray-500'">
                            <a href="/trust">Trust</a>
                        </li>
                         <li class="lg:text-lg font-semibold hover:text-gray-700 focus:text-green-500 "
                         :class="$route.name === 'Contact' ? 'text-green-500' : 'text-gray-500'">
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
        
                <div class="flex gap-x-4">
                    <div class="hidden md:block px-4 py-2 rounded-full border border-gray-300">
                        <p>India</p>
                    </div>
        
                    <a href="#" class="hidden md:block">
                        <button class="px-4 py-2 rounded-full bg-green-600 hover:bg-green-800 text-white">Donate</button>
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
            <ul class="flex flex-col gap-y-6 my-10">
                <li class="lg:text-xl font-semibold hover:text-gray-700 "
                :class="$route.name === 'Home' ? 'text-green-500' : 'text-gray-500'">
                    <a href="/">Home</a>
                </li>
                <li class="lg:text-xl font-semibold hover:text-gray-700 focus:text-green-500 "
                    :class="$route.name === 'About' ? 'text-green-500' : 'text-gray-500'">
                    <a href="/about">About</a>
                </li>
                <li v-if="$route.name !== 'Home'" class="lg:text-xl font-semibold hover:text-gray-700 focus:text-green-500 "
                    :class="$route.name === 'Blog' ? 'text-green-500' : 'text-gray-500'">
                    <a href="/blog">News & Events</a>
                </li>
                <li class="lg:text-xl font-semibold hover:text-gray-700 focus:text-green-500 "
                    :class="$route.name === 'Academics' ? 'text-green-500' : 'text-gray-500'">
                    <a href="/academics">Academics</a>
                </li>
                <li class="lg:text-xl font-semibold hover:text-gray-700 focus:text-green-500 "
                    :class="$route.name === 'Admission' ? 'text-green-500' : 'text-gray-500'">
                    <a href="/admission">Admission</a>
                </li>
                <li class="lg:text-xl font-semibold hover:text-gray-700 focus:text-green-500 "
                    :class="$route.name === 'trust' ? 'text-green-500' : 'text-gray-500'">
                    <a href="/trust">Trust</a>
                </li>
            </ul>

            <a href="/contact" class="">
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