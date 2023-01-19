<template>
    <div>
        <section class="navigation">
            <div class="nav-container">
                <nav>
                    <div class="nav-mobile" @click="open = !open">
                        <!-- Toggle Hamburger between default and X on click (mobile only) -->
                        <a
                            id="nav-toggle"
                            href="#"
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
                                    v-click-outside="clickOutsideParty"
                                    href="#"
                                    @click="party"
                                >
                                    Bridal Party
                                </a>

                                <ul
                                    v-show="partyLink === true"
                                    class="nav-dropdown"
                                >
                                    <li>
                                        <NuxtLink to="/the-couple">
                                            Meet the Couple
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/bride">
                                            Meet The Bride
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/groom">
                                            Meet the Groom
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/bridesmaids">
                                            Meet the Bridesmaids
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/groomsmen">
                                            Meet the Groomsmen
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a
                                    v-click-outside="clickOutsideEvent"
                                    href="#"
                                    @click="event"
                                    >Event
                                </a>
                                <ul
                                    v-show="eventLink === true"
                                    class="nav-dropdown"
                                >
                                    <li>
                                        <NuxtLink to="/venue">
                                            The Venue
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/schedule">
                                            Schedule
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <NuxtLink to="/contact"> Contact </NuxtLink>
                            </li>

                            <li>
                                <NuxtLink to="/registry"> Registry </NuxtLink>
                            </li>

                            <li>
                                <a :href="rsvpLink">RSVP</a>
                            </li>
                        </ul>
                    </VueSlideToggle>
                </nav>
            </div>
        </section>
        <Nuxt />

        <!--Footer -->
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
                            {{ link }}
                        </p>

                        <p>
                            <font-awesome-icon
                                class="pr-1"
                                icon="fa-solid fa-phone"
                            />
                            {{ phone }}
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
                            {{ ceremonyLine1 }}
                        </p>
                        <p class="pl-6 pb-1 text-lg">{{ ceremonyLine2 }}</p>

                        <p class="text-lg pb-1">
                            <font-awesome-icon
                                class="pr-1"
                                icon="fa-solid fa-calendar-days"
                            />
                            {{ date }}
                        </p>

                        <p class="text-lg pb-1">
                            <font-awesome-icon
                                class="pr-1"
                                icon="fa-solid fa-clock"
                            />
                            {{ ceremonyTime }}
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
                            {{ receptionLine1 }}
                        </p>
                        <p class="pl-6 pb-1 text-lg">{{ receptionLine2 }}</p>

                        <p class="text-lg pb-1">
                            <font-awesome-icon
                                class="pr-1"
                                icon="fa-solid fa-calendar-days"
                            />
                            {{ date }}
                        </p>

                        <p class="text-lg pb-1">
                            <font-awesome-icon
                                class="pr-1"
                                icon="fa-solid fa-clock"
                            />
                            {{ receptionTime }}
                        </p>
                    </div>

                    <div class="col-span-12 text-center mx-auto mt-5">
                        <ul class="inline text-lg font-bold">
                            <li class="md:inline px-5 uppercase">
                                <NuxtLink to="/">Home</NuxtLink>
                            </li>
                            <li class="md:inline px-5 uppercase">
                                <NuxtLink to="/venue">Venue</NuxtLink>
                            </li>
                            <li class="md:inline px-5 uppercase">
                                <NuxtLink to="/contact">Contact</NuxtLink>
                            </li>
                            <li class="md:inline px-5 uppercase">
                                <NuxtLink to="/registry"> Registry </NuxtLink>
                            </li>
                            <li class="md:inline px-5 uppercase">
                                <a :href="rsvpLink"></a>RSVP
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
import {
    ceremonyAddress,
    receptionAddress,
    index,
    contactPrimary,
    RSVP,
} from '~/data/data.json'

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
            link: contactPrimary.link,
            phone: contactPrimary.phone,
            ceremonyLine1: ceremonyAddress.address2,
            ceremonyLine2: ceremonyAddress.address3,
            receptionLine1: receptionAddress.address2,
            receptionLine2: receptionAddress.address3,
            date: index.date,
            ceremonyTime: '6:30pm - 6:45pm',
            receptionTime: '7:00pm - 9:00pm',
            rsvpLink: RSVP.link,
            partyLink: false,
            eventLink: false,
        }
    },
    watch: {
        $route() {
            this.toggleHamburger = null
            this.activeDropdown = null
            this.open = null
        },
    },
    methods: {
        party() {
            this.partyLink = !this.partyLink
        },
        event() {
            this.eventLink = !this.eventLink
        },
        clickOutsideParty() {
            this.partyLink = false
        },
        clickOutsideEvent() {
            this.eventLink = false
        },
    },
}
</script>
