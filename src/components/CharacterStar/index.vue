<style lang="scss" src="./style.scss" scoped></style>
<template src="./template.html"></template>
<script>
export default {
  name: 'character-star',
  props: {
    stars: {
      type: Number,
      required: true,
      default: 1
    },
    counts: {
      type: Number,
      required: true,
      default: 0
    },
    total: {
      type: Number,
      required: true,
      default: 0
    }
  }
}
</script>
