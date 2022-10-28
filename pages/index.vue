<template>
  <div>
    <button @click="open = !open">Toggle</button>
    <VueSlideToggle :open="open" tag="section" :duration="500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illo sapiente laboriosam incidunt, nulla, necessitatibus ab labore rerum hic eaque facilis! Eum sequi iure ullam recusandae reprehenderit, eligendi sit ducimus nisi dicta, tenetur laborum iusto dolores vero. Aspernatur quidem facilis saepe. Earum obcaecati et, amet quod quasi animi sit quas?
    </VueSlideToggle>
  </div>
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle'

export default {
  name: 'IndexPage',
  components: {
    VueSlideToggle
  },
  data() {
    return {
      open: false,
    }
  },
}
</script>
