<style lang="scss" src="./style.scss" scoped></style>
<template src="./template.html"></template>
<script>
export default {
  name: 'home',
  data() {
    return {
      isActive: false,
      innerWidth: 0,
      innerHeight: 0
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
      this.innerHeight = window.innerHeight * 1.05
      this.innerWidth = this.innerHeight * 3
      this.doTransition()
    },
    showTrans() {
      const indexBegin = 6
      const indexMax = 18
      const folderPrefix = 'trans_'
      const folderTemp = [0, 0, 0]
      const index = Math.floor(indexBegin + Math.random() * (indexMax - indexBegin + 1))
      folderTemp[2] = index % 10
      folderTemp[1] = Math.floor(index / 10) % 10
      folderTemp[0] = Math.floor(index / 100) % 10
      return folderPrefix + folderTemp.join('')
    },
    doTransition() {
      setTimeout(() => {
        this.isActive = true
      }, 10)
    }
  }
}
</script>
