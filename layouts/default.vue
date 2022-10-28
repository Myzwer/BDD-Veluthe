<template>
  <div>
    <section class="navigation">
      <div class="nav-container">
        <div class="brand">
          <a href="#!">Logo</a>
        </div>
        <nav>
          <div class="nav-mobile" @click="isHidden = !isHidden">
          <!-- Toggle Hamburger between default and X on click (mobile only) -->
            <a
              id="nav-toggle" href="#!"
              :class="{ active: toggleHamburger }"
              @click="toggleHamburger = !toggleHamburger">
              <span></span>
            </a>
          </div>

          <ul v-show="isHidden" class="nav-list">

            <li>
              <a href="#!">Home</a>
            </li>

            <li>
              <a href="#!" @click="toggleActiveDropdown('party')">Bridal Party</a>
              <ul v-show="activeDropdown === 'party'" class="nav-dropdown">
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
              <a href="#!" @click="toggleActiveDropdown('event')">Event</a>
              <ul v-show="activeDropdown === 'event'" class="nav-dropdown">
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
        </nav>
      </div>
    </section>
    <Nuxt/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Set the state of the hamburger menu on page load.
      toggleHamburger: false,
      isHidden: false,
      // declare active dropdown but give it no value so it can be reassigned later.
      activeDropdown: null,
    }
  },
  methods: {
    toggleActiveDropdown(dropdown) {
      this.activeDropdown = this.activeDropdown === dropdown ? null : dropdown;
    },
  },
}
</script>
