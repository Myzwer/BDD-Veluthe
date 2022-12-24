<template>
    <div>
        <div class="relative">
            <div class="groom-h1-background">
                <div class="content-middle text-white text-center">
                    <h1 class="text-7xl mb-2 px-2">Meet The Groom</h1>
                    <h2 class="text-xl font-bold uppercase body-font">
                        {{ hashtag }}
                    </h2>
                </div>
            </div>
        </div>

        <div class="bg-tertiary">
            <div class="text-center mx-auto max-w-2xl md:max-w-5xl">
                <div class="grid grid-cols-12 gap-4 pt-10 pb-12">
                    <div class="col-span-12 md:col-span-5 px-5">
                        <div class="mt-10 px-5">
                            <img
                                class="rounded-xl shadow-lg"
                                :src="groomHeadshot"
                                alt="Groom Headshot"
                            />
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-7 px-5">
                        <h2 class="pt-7 text-5xl text-left">
                            Hey! I'm {{ firstName }}.
                        </h2>
                        <p class="text-left pb-5">
                            {{ bio1 }}
                        </p>

                        <p class="text-left pb-5">
                            {{ bio2 }}
                        </p>
                        <div v-if="facebook != null" class="pb-5">
                            <a :href="facebook" target="_blank">
                                <div
                                    class="text-black border-2 border-black uppercase rounded-md font-bold shadow-lg px-8 py-3 ease-in-out duration-300 hover:bg-accent hover:text-white hover:border-white"
                                >
                                    <font-awesome-icon
                                        icon="fa-brands fa-facebook"
                                    />
                                    Facebook
                                </div>
                            </a>
                        </div>
                        <div v-if="instagram != null" class="pb-5">
                            <a :href="instagram" target="_blank">
                                <div
                                    class="text-black border-2 border-black uppercase rounded-md font-bold shadow-lg px-8 py-3 ease-in-out duration-300 hover:bg-accent hover:text-white hover:border-white"
                                >
                                    <font-awesome-icon
                                        icon="fa-brands fa-instagram"
                                    />
                                    Instagram
                                </div>
                            </a>
                        </div>
                        <div v-if="twitter != null" class="pb-5">
                            <a :href="twitter" target="_blank">
                                <div
                                    class="text-black border-2 border-black uppercase rounded-md font-bold shadow-lg px-8 py-3 ease-in-out duration-300 hover:bg-accent hover:text-white hover:border-white"
                                >
                                    <font-awesome-icon
                                        icon="fa-brands fa-twitter"
                                    />
                                    Twitter
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button-footer />
    </div>
</template>

<script>
import { groom, tagline } from '~/data/data.json'

export default {
    name: 'MeetTheGroom',

    data() {
        return {
            hashtag: tagline.hashtag,
            name: groom.name,
            firstName: groom.firstName,
            groomHeadshot: groom.groomHeadshot,
            bio1: groom.bio1,
            bio2: groom.bio1,
            facebook: groom.facebook,
            instagram: groom.instagram,
            twitter: groom.twitter,
        }
    },
}
</script>

<style>
/* stylelint-disable color-function-notation */
.groom-h1-background {
    background: linear-gradient(rgba(0, 0, 0, 60%), rgba(0, 0, 0, 60%)),
        url('~static/images/groom/groom-head.jpg');
    height: 60vh;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
}

/* stylelint-enable color-function-notation */
</style>
