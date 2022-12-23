<template>
    <div>
        <div class="relative">
            <div class="contact-h1-background">
                <div class="content-middle text-white text-center">
                    <h1 class="text-7xl mb-2 px-2">Contact Us</h1>
                    <h2 class="text-xl font-bold uppercase body-font">
                        #forresterfairytale
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
                            <p class="text-lg">us@ourweddingsite.com</p>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-4 px-5 text-left">
                        <div class="pb-5">
                            <h4 class="font-bold text-2xl">Josh</h4>
                            <p class="text-lg">josh@weddingsite.com</p>
                            <p class="text-lg">865-803-5453</p>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-4 px-5 text-left">
                        <div class="pb-5">
                            <h4 class="font-bold text-2xl">Katie</h4>
                            <p class="text-lg">katie@weddingsite.com</p>
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

                    <div class="col-span-12 px-5 text-left">
                        <div class="pb-3">
                            <h4 class="font-bold text-xl">
                                Is there a dress code for the wedding?
                            </h4>
                            <p class="text-md">Yes. Please wear clothes.</p>
                        </div>
                    </div>

                    <div class="col-span-12 px-5 text-left">
                        <div class="pb-3">
                            <h4 class="font-bold text-xl">
                                Is there a dress code for the wedding?
                            </h4>
                            <p class="text-md">Yes. Please wear clothes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactUs',
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
