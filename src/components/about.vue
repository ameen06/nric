<template>
  <section class="w-full py-[5%] px-[8%] flex justify-between items-center flex-col lg:flex-row bg-cover bg-no-repeat bg-center"
    style="background-image: url(' {{ asset('images/about-bg.webp') }} ');">


        <div class="lg:w-[45%]">
            <h1 class="text-2xl leading-relaxed md:text-6xl font-medium max-w-xl">We rise the <span class="text-green-500">spiritual leaders</span> of all time</h1>

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
            <div class="p-2 shadow-lg rounded-2xl">
                <img src="https://excavo.000webhostapp.com/nric/classone.webp"
                class="w-full rounded-xl" alt="Class one group pic" loading="lazy">
            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: 'AboutSection',
}
</script>

<style>

</style>