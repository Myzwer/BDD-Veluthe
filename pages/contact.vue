<template>
    <div>
        <div class="relative">
            <div class="contact-h1-background">
                <div class="content-middle text-white text-center">
                    <h1 class="text-7xl mb-2 px-2">Contact Us</h1>
                    <h2 class="text-xl font-bold uppercase body-font">
                        {{ hashtag }}
                    </h2>
                </div>
            </div>
        </div>

        <div class="bg-tertiary">
            <div class="text-center mx-auto max-w-2xl md:max-w-5xl">
                <div class="grid grid-cols-12 gap-4 pt-10 pb-12">
                    <div class="col-span-12 px-5 text-left">
                        <h2 class="text-5xl">Have a Question?</h2>
                    </div>

                    <div class="col-span-12 md:col-span-4 px-5 text-left">
                        <div class="pb-5">
                            <h4 class="font-bold text-2xl">Primary</h4>
                            <p class="text-lg">{{ primaryPhone }}</p>
                            <p class="text-lg">{{ primaryLink }}</p>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-4 px-5 text-left">
                        <div class="pb-5">
                            <h4 class="font-bold text-2xl">{{ groom }}</h4>
                            <p class="text-lg">{{ groomPhone }}</p>
                            <p class="text-lg">{{ groomLink }}</p>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-4 px-5 text-left">
                        <div class="pb-5">
                            <h4 class="font-bold text-2xl">{{ bride }}</h4>
                            <p class="text-lg">{{ bridePhone }}</p>
                            <p class="text-lg">{{ brideLink }}</p>
                        </div>
                    </div>

                    <div class="col-span-12 px-5 text-left">
                        <hr />
                    </div>
                </div>

                <div class="grid grid-cols-12 gap-4 pt-5 pb-12">
                    <div class="col-span-12 px-5 pb-3 text-left">
                        <h2 class="text-5xl">Frequently Asked Questions</h2>
                    </div>
                    <FrequentQuestions
                        v-for="question in questions"
                        :key="question.question"
                        :question="question.question"
                        :answer="question.answer"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    tagline,
    contactPrimary,
    contactBride,
    contactGroom,
    groom,
    bride,
    questions,
} from '~/data/data.json'
import FrequentQuestions from '~/components/FrequentQuestions'

export default {
    name: 'ContactUs',
    components: { FrequentQuestions },
    data() {
        return {
            questions,
            hashtag: tagline.hashtag,
            primaryLink: contactPrimary.link,
            primaryPhone: contactPrimary.phone,
            groomPhone: contactGroom.phone,
            groomLink: contactGroom.link,
            bridePhone: contactBride.phone,
            brideLink: contactBride.link,
            groom: groom.firstName,
            bride: bride.firstName,
        }
    },
}
</script>

<style>
/* stylelint-disable color-function-notation */
.contact-h1-background {
    background: linear-gradient(rgba(0, 0, 0, 60%), rgba(0, 0, 0, 60%)),
        url('~static/images/contact/contact-head.jpg');
    height: 60vh;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
}

/* stylelint-enable color-function-notation */
</style>
