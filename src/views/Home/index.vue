<style lang="scss" src="./style.scss" scoped></style>
<template src="./template.html"></template>
<script>
export default {
  name: 'home',
  data() {
    return {
      isActive: false,
      innerWidth: 0,
      innerHeight: 0,
      trans: [
        'trans_01',
        'trans_02',
        'trans_03',
        'trans_04',
        'trans_05',
        'trans_06',
        'trans_07',
        'trans_char_01',
        'trans_char_02'
      ]
    }
  },
  beforeMount() {
    this.resizeHandler()
    window.addEventListener('resize', this.resizeHandler)
  },
  mounted() {
    this.doTransition()
  },
  methods: {
    resizeHandler() {
      this.isActive = false
      this.innerHeight = window.innerHeight * 1
      this.innerWidth = this.innerHeight * 3
      this.doTransition()
    },
    showTrans() {
      const index = Math.floor(Math.random() * this.trans.length)
      return this.trans[index]
    },
    doTransition() {
      setTimeout(() => {
        this.isActive = true
      }, 10)
    }
  }
}
</script>
