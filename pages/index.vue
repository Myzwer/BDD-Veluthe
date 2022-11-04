<template>
  <div>
    <!--    <button @click="open = !open">Toggle</button>
        <VueSlideToggle :open="open" tag="section" :duration="500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illo sapiente laboriosam incidunt, nulla, necessitatibus ab labore rerum hic eaque facilis! Eum sequi iure ullam recusandae reprehenderit, eligendi sit ducimus nisi dicta, tenetur laborum iusto dolores vero. Aspernatur quidem facilis saepe. Earum obcaecati et, amet quod quasi animi sit quas?
        </VueSlideToggle>-->


    <div id="app">
      <button
        ref="button"
        class="toggle-button"
        @click="showPopup = !showPopup"
      >
        TOGGLE
      </button>
      <div
        v-show="showPopup"
        v-closable="{
        exclude: ['button'],
        handler: 'onClose'
  }"
        class="popup-box"
      >
        Test Popup Box
      </div>
    </div>


  </div>
</template>

<script>

export default {

  name: 'IndexPage',
  data() {
    return {
      showPopup: false
    }
  },
  methods: {
    onClose() {
      this.showPopup = false
    }
  },

}
</script>
