<style lang="scss" src="./style.scss" scoped></style>
<template src="./template.html"></template>
<script>
export default {
  name: 'soul-carta-portrait',
  props: {
    it: {
      type: Object,
      required: true,
      default() {
        return {
          id: 0,
          name_ch: '',
          name_jp: '',
          icon: '',
          hp: 0,
          atk: 0,
          def: 0,
          agl: 0,
          crt: 0
        }
      }
    }
  }
}
</script>
