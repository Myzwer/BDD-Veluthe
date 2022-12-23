<template>
    <div>
        <div class="relative">
            <div class="venue-h1-background">
                <div class="content-middle text-white text-center">
                    <h1 class="text-7xl mb-2 px-2">The Venue</h1>
                    <h2 class="text-xl font-bold uppercase body-font">
                        #forresterfairytale
                    </h2>
                </div>
            </div>
        </div>

        <div class="bg-tertiary">
            <div class="text-center mx-auto max-w-2xl md:max-w-5xl">
                <div class="grid grid-cols-12 gap-4 pt-10 pb-12">
                    <div class="col-span-12 md:col-span-5 px-5 text-left">
                        <h2 class="text-5xl">Address</h2>
                        <h3 class="text-xl font-bold uppercase body-font">
                            123 Wedding Ceremony Ln
                        </h3>
                        <h3 class="text-xl font-bold uppercase body-font">
                            Weddingville, TN 12345
                        </h3>
                        <div class="py-5">
                            <a
                                href="#"
                                target="_blank"
                                class="bg-accent text-white uppercase rounded-md font-bold shadow-lg text-white px-8 py-3 mt-10 transition duration-300 ease-in-out hover:bg-accent-alt hover:shadow-xl"
                            >
                                Launch in Maps
                                <font-awesome-icon
                                    icon="fa-solid fa-arrow-up-right-from-square"
                                />
                            </a>
                        </div>

                        <div class="py-5">
                            <a
                                href="#"
                                target="_blank"
                                class="bg-accent text-white uppercase rounded-md font-bold shadow-lg text-white px-8 py-3 mt-10 transition duration-300 ease-in-out hover:bg-accent-alt hover:shadow-xl"
                            >
                                RSVP
                            </a>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-7 px-5 text-left">
                        <gmap-map
                            ref="mmm"
                            :center="center"
                            :zoom="11"
                            style="width: 100%; height: 300px"
                        >
                            <gmap-marker
                                v-for="(m, index) in markers"
                                :key="index"
                                :position="m.position"
                                :clickable="true"
                                :draggable="true"
                                @click="center = m.position"
                            ></gmap-marker>
                        </gmap-map>
                    </div>
                </div>

                <div class="grid grid-cols-12 gap-4 pt-10 pb-12">
                    <div class="col-span-12 px-5 text-left">
                        <h2 class="text-5xl">Special Instructions</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aperiam, aut consequatur deserunt dolore enim
                            fuga illum laboriosam laborum laudantium non
                            obcaecati quasi quisquam quod repellat repudiandae
                            similique tempore temporibus unde!
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-secondary">
            <div class="text-center mx-auto max-w-2xl md:max-w-5xl">
                <div class="grid grid-cols-12 gap-4 pt-10 pb-12 text-white">
                    <div class="col-span-12 text-left">
                        <h2 class="text-5xl">Lodging Options</h2>
                    </div>

                    <HotelLocations
                        v-for="hotel in hotels"
                        :key="hotel.name"
                        :name="hotel.name"
                        :address-line1="hotel.addressLine1"
                        :address-line2="hotel.addressLine2"
                        :distance="hotel.distance"
                        :link="hotel.link"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HotelLocations from '~/components/HotelLocations'
import { hotels } from '~/data/data.json'

// eslint-disable-next-line no-console
export default {
    name: 'EventVenue',
    components: { HotelLocations },
    data() {
        return {
            hotels,
            center: {
                lat: 40.7484,
                lng: -73.9857,
            },
            markers: [
                {
                    position: {
                        lat: 40.7484,
                        lng: -73.9857,
                    },
                },
            ],
        }
    },
}
</script>

<style>
/* stylelint-disable color-function-notation */
.venue-h1-background {
    background: linear-gradient(rgba(0, 0, 0, 60%), rgba(0, 0, 0, 60%)),
        url('~static/images/venue/venue-head.jpg');
    height: 60vh;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
}

/* stylelint-enable color-function-notation */
</style>
