<style lang="scss" src="./style.scss" scoped></style>
<template src="./template.html"></template>
<script>
export default {
  name: 'collection-info',
  props: {
    stars: {
      type: Number,
      required: true,
      default: 1
    },
    counts: {
      type: Number,
      required: false,
      default: 0
    },
    total: {
      type: Number,
      required: false,
      default: 0
    }
  }
}
</script>
