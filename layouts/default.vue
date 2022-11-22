<template>
  <div>
    <section class="navigation">
      <div class="nav-container">
        <div class="brand">
          <a href="#!">Logo</a>
        </div>
        <nav>
          <div class="nav-mobile" @click=" open = !open">
            <!-- Toggle Hamburger between default and X on click (mobile only) -->
            <a
              id="nav-toggle" href="#!"
              :class="{ active: toggleHamburger }"
              @click="toggleHamburger = !toggleHamburger">
              <span></span>
            </a>
          </div>

          <VueSlideToggle id="overflow-fix" :open="open" tag="section" :duration="300">
            <ul class="nav-list" :class="{ block: open }">

              <li>
                <a href="#!">Home</a>
              </li>

              <li>
                <a ref="navClose" href="#!" @click="toggleActiveDropdown('party')">Bridal Party</a>
                <ul
                  v-show="activeDropdown === 'party'"
                  v-closable="{
                  exclude: ['navClose', 'navClose2'],
                  handler: 'toggleActiveDropdown'
                  }"
                  class="nav-dropdown"
                >
                  <li>
                    <a href="#!">Meet the Couple</a>
                  </li>
                  <li>
                    <a href="#!">Meet The Bride</a>
                  </li>
                  <li>
                    <a href="#!">Meet the Groom</a>
                  </li>
                  <li>
                    <a href="#!">Meet the Bridesmaids</a>
                  </li>
                  <li>
                    <a href="#!">Meet the Groomsmen</a>
                  </li>
                </ul>
              </li>

              <li>
                <a ref="navClose2" href="#!" @click="toggleActiveDropdown('event')">Event</a>
                <ul
                  v-show="activeDropdown === 'event'"
                  v-closable="{
                  exclude: ['navClose', 'navClose2'],
                  handler: 'toggleActiveDropdown'
                  }"
                  class="nav-dropdown">
                  <li>
                    <a href="#!">Venue Details</a>
                  </li>
                  <li>
                    <a href="#!">Lodging</a>
                  </li>
                  <li>
                    <a href="#!">Schedule</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#!">Contact</a>
              </li>

              <li>
                <a href="#!">Registry</a>
              </li>

              <li>
                <a href="#!">RSVP</a>
              </li>
            </ul>
          </VueSlideToggle>
        </nav>
      </div>
    </section>
    <Nuxt/>
  </div>
</template>

<script>
import {VueSlideToggle} from 'vue-slide-toggle'

export default {
  components: {
    VueSlideToggle
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
      this.activeDropdown = this.activeDropdown === dropdown ? null : dropdown;
    },
  },
}
</script>
