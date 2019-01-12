<style lang="scss" src="./style.scss" scoped></style>
<template src="./template.html"></template>
<script>
export default {
  name: 'soul-carta-card',
  props: {
    it: {
      type: Object,
      required: true,
      default() {
        return {
          id: 0
        }
      }
    }
  }
}
</script>
