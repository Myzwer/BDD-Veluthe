<template>
    <div>
        <section class="navigation">
            <div class="nav-container">
                <div class="brand">
                    <a href="#!">Logo</a>
                </div>
                <nav>
                    <div class="nav-mobile" @click="open = !open">
                        <!-- Toggle Hamburger between default and X on click (mobile only) -->
                        <a
                            id="nav-toggle"
                            href="#!"
                            :class="{ active: toggleHamburger }"
                            @click="toggleHamburger = !toggleHamburger"
                        >
                            <span></span>
                        </a>
                    </div>

                    <VueSlideToggle
                        id="overflow-fix"
                        :open="open"
                        tag="section"
                        :duration="300"
                    >
                        <ul class="nav-list" :class="{ block: open }">
                            <li>
                                <NuxtLink to="/">Home</NuxtLink>
                            </li>

                            <li>
                                <a
                                    ref="navClose"
                                    href="#!"
                                    @click="toggleActiveDropdown('party')"
                                    >Bridal Party</a
                                >
                                <ul
                                    v-show="activeDropdown === 'party'"
                                    v-closable="{
                                        exclude: ['navClose', 'navClose2'],
                                        handler: 'toggleActiveDropdown',
                                    }"
                                    class="nav-dropdown"
                                >
                                    <li>
                                        <NuxtLink to="/meetCouple"
                                            >Meet the Couple</NuxtLink
                                        >
                                    </li>
                                    <li>
                                        <NuxtLink to="/MeetTheBride"
                                            >Meet The Bride</NuxtLink
                                        >
                                    </li>
                                    <li>
                                        <NuxtLink to="/MeetTheGroom"
                                            >Meet the Groom</NuxtLink
                                        >
                                    </li>
                                    <li>
                                        <NuxtLink to="/MeetTheBridesmaids"
                                            >Meet the Bridesmaids</NuxtLink
                                        >
                                    </li>
                                    <li>
                                        <NuxtLink to="/MeetTheGroomsmen"
                                            >Meet the Groomsmen</NuxtLink
                                        >
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a
                                    ref="navClose2"
                                    href="#!"
                                    @click="toggleActiveDropdown('event')"
                                    >Event</a
                                >
                                <ul
                                    v-show="activeDropdown === 'event'"
                                    v-closable="{
                                        exclude: ['navClose', 'navClose2'],
                                        handler: 'toggleActiveDropdown',
                                    }"
                                    class="nav-dropdown"
                                >
                                    <li>
                                        <NuxtLink to="/EventVenue"
                                            >The Venue</NuxtLink
                                        >
                                    </li>
                                    <li>
                                        <NuxtLink to="/EventSchedule"
                                            >Schedule</NuxtLink
                                        >
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <NuxtLink to="/ContactUs">Contact</NuxtLink>
                            </li>

                            <li>
                                <NuxtLink to="/WeddingRegistry">
                                    Registry
                                </NuxtLink>
                            </li>

                            <li>
                                <a href="#!">RSVP</a>
                            </li>
                        </ul>
                    </VueSlideToggle>
                </nav>
            </div>
        </section>
        <Nuxt />

        <div class="bg-primary text-white">
            <div class="mx-4 md:mx-10 lg:max-w-5xl lg:mx-auto py-10">
                <div class="grid grid-cols-12 gap-4 md:gap-10">
                    <div class="col-span-12 md:col-span-4">
                        <p class="font-bold text-xl uppercase pb-1">
                            Get In Touch
                        </p>
                        <hr class="pb-1" />
                        <p class="text-lg pb-1">
                            <font-awesome-icon
                                class="pr-1"
                                icon="fa-solid fa-envelope"
                            />
                            josh@onefortyfivedesign.com
                        </p>

                        <p>
                            <font-awesome-icon
                                class="pr-1"
                                icon="fa-solid fa-phone"
                            />
                            865-803-5453
                        </p>
                    </div>

                    <div class="col-span-12 md:col-span-4">
                        <p class="font-bold text-xl uppercase pb-1">
                            Ceremony Details
                        </p>
                        <hr class="pb-1" />

                        <p class="text-lg">
                            <font-awesome-icon
                                class="pr-1"
                                icon="fa-solid fa-location-dot"
                            />
                            123 Wedding Ceremony Ln
                        </p>
                        <p class="pl-6 pb-1 text-lg">Weddingville, TN 12345</p>

                        <p class="text-lg pb-1">
                            <font-awesome-icon
                                class="pr-1"
                                icon="fa-solid fa-calendar-days"
                            />
                            December 25, 2023
                        </p>

                        <p class="text-lg pb-1">
                            <font-awesome-icon
                                class="pr-1"
                                icon="fa-solid fa-clock"
                            />
                            6:30pm - 6:45pm
                        </p>
                    </div>

                    <div class="col-span-12 md:col-span-4">
                        <p class="font-bold text-xl uppercase pb-1">
                            Reception Details
                        </p>
                        <hr class="pb-1" />

                        <p class="text-lg">
                            <font-awesome-icon
                                class="pr-1"
                                icon="fa-solid fa-location-dot"
                            />
                            123 Reception Blvd
                        </p>
                        <p class="pl-6 pb-1 text-lg">Partytown, USA 12345</p>

                        <p class="text-lg pb-1">
                            <font-awesome-icon
                                class="pr-1"
                                icon="fa-solid fa-calendar-days"
                            />
                            December 25, 2023
                        </p>

                        <p class="text-lg pb-1">
                            <font-awesome-icon
                                class="pr-1"
                                icon="fa-solid fa-clock"
                            />
                            7:00pm - 9:00pm
                        </p>
                    </div>

                    <div class="col-span-12 text-center mx-auto mt-5">
                        <ul class="inline text-lg font-bold">
                            <li class="md:inline px-5 uppercase">
                                <NuxtLink to="/">Home</NuxtLink>
                            </li>
                            <li class="md:inline px-5 uppercase">
                                <NuxtLink to="/EventVenue">Event</NuxtLink>
                            </li>
                            <li class="md:inline px-5 uppercase">
                                <NuxtLink to="/ContactUs">Contact</NuxtLink>
                            </li>
                            <li class="md:inline px-5 uppercase">
                                <NuxtLink to="/WeddingRegistry">
                                    Registry
                                </NuxtLink>
                            </li>
                            <li class="md:inline px-5 uppercase">
                                <a href="#"></a>RSVP
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle'

export default {
    components: {
        VueSlideToggle,
    },

    data() {
        return {
            // Set the state of the hamburger menu on page load.
            toggleHamburger: false,
            // declare active dropdown but give it no value so it can be reassigned later.
            activeDropdown: null,
            open: false,
        }
    },
    methods: {
        toggleActiveDropdown(dropdown) {
            this.activeDropdown =
                this.activeDropdown === dropdown ? null : dropdown
        },
    },
}
</script>
