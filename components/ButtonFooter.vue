<template>
    <div>
        <div class="bg-primary-alt">
            <div class="text-center mx-auto max-w-2xl md:max-w-6xl pt-10 pb-20">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12 text-center mx-auto">
                        <h3 class="pb-5 text-5xl text-left text-white">
                            View More
                        </h3>
                    </div>

                    <div
                        v-if="coupleCheck"
                        class="col-span-12 xl:col-span-3 pb-5"
                    >
                        <div class="text-center">
                            <NuxtLink
                                to="/the-couple"
                                class="bg-accent text-white uppercase rounded-md font-bold shadow-lg text-white px-8 py-3 mt-10 transition duration-300 ease-in-out hover:bg-accent-alt hover:shadow-xl"
                            >
                                Meet The Couple
                            </NuxtLink>
                        </div>
                    </div>

                    <div
                        v-if="groomCheck"
                        class="col-span-12 xl:col-span-3 pb-5"
                    >
                        <div class="text-center">
                            <NuxtLink
                                to="/groom"
                                class="bg-accent text-white uppercase rounded-md font-bold shadow-lg text-white px-8 py-3 mt-10 transition duration-300 ease-in-out hover:bg-accent-alt hover:shadow-xl"
                            >
                                Meet The Groom
                            </NuxtLink>
                        </div>
                    </div>

                    <div v-if="menCheck" class="col-span-12 xl:col-span-3 pb-5">
                        <div class="text-center">
                            <NuxtLink
                                to="/groomsmen"
                                class="bg-accent text-white uppercase rounded-md font-bold shadow-lg text-white px-8 py-3 mt-10 transition duration-300 ease-in-out hover:bg-accent-alt hover:shadow-xl"
                            >
                                Meet The Groomsmen
                            </NuxtLink>
                        </div>
                    </div>

                    <div
                        v-if="brideCheck"
                        class="col-span-12 xl:col-span-3 pb-5"
                    >
                        <div class="text-center">
                            <NuxtLink
                                to="/bride"
                                class="bg-accent text-white uppercase rounded-md font-bold shadow-lg text-white px-8 py-3 mt-10 transition duration-300 ease-in-out hover:bg-accent-alt hover:shadow-xl"
                            >
                                Meet The Bride
                            </NuxtLink>
                        </div>
                    </div>

                    <div
                        v-if="maidCheck"
                        class="col-span-12 xl:col-span-3 pb-5"
                    >
                        <div class="text-center">
                            <NuxtLink
                                to="/bridesmaids"
                                class="bg-accent text-white uppercase rounded-md font-bold shadow-lg text-white px-8 py-3 mt-10 transition duration-300 ease-in-out hover:bg-accent-alt hover:shadow-xl"
                            >
                                Meet The Bridesmaids
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ButtonFooter',

    computed: {
        currentPath() {
            return this.$nuxt.$route.name
        },

        coupleCheck() {
            return this.currentPath !== 'the-couple'
        },
        brideCheck() {
            return this.currentPath !== 'bride'
        },
        maidCheck() {
            return this.currentPath !== 'bridesmaids'
        },
        groomCheck() {
            return this.currentPath !== 'groom'
        },
        menCheck() {
            return this.currentPath !== 'groomsmen'
        },
    },
}
</script>
