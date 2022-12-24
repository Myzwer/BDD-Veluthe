<template>
    <div>
        <div class="relative">
            <div class="couple-h1-background">
                <div class="content-middle text-white text-center">
                    <h1 class="text-7xl mb-2 px-2">About Us</h1>
                    <h2 class="text-xl font-bold uppercase body-font">
                        #forresterfairytale
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
                                :src="couplePhoto"
                                alt="Photo of the Couple"
                            />
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-7 px-5">
                        <h2 class="pt-7 text-5xl text-left">
                            Meet {{ groomName }} + {{ brideName }}
                        </h2>
                        <p class="text-left pb-5">
                            {{ bio1 }}
                        </p>

                        <p class="text-left pb-5">
                            {{ bio2 }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <button-footer />
    </div>
</template>

<script>
import { bride, groom, couple } from '~/data/data.json'

export default {
    name: 'MeetCouple',

    data() {
        return {
            brideName: bride.firstName,
            groomName: groom.firstName,
            couplePhoto: couple.couplePhoto,
            bio1: couple.bio1,
            bio2: couple.bio2,
            bio3: couple.bio3,
        }
    },
}
</script>

<style>
/* stylelint-disable color-function-notation */
.couple-h1-background {
    background: linear-gradient(rgba(0, 0, 0, 40%), rgba(0, 0, 0, 40%)),
        url('~static/images/couple/couple-head-bg.jpg');
    height: 60vh;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

/* stylelint-enable color-function-notation */
</style>
