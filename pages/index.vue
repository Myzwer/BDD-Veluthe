<template>
<div>
<h1>Cats</h1>
    <h1 @click="isHidden = !isHidden">CLick me</h1>
    <h1 v-show="isHidden">Hide me on click event!</h1>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      isHidden: true,
    }
  },
}
</script>
