<template>
  <div id="app">
    <global-header/>
    <router-view/>
    <global-footer/>
  </div>
</template>
<script>
import GlobalHeader from '@/components/GlobalHeader'
import GlobalFooter from '@/components/GlobalFooter'
export default {
  components: {
    GlobalHeader,
    GlobalFooter
  },
  methods: {
    keyupHandler(e) {
      const { name } = this.$route
      const regexpReader = /-Reader$/
      if (e.keyCode === 27 && regexpReader.test(name)) {
        this.$router.push({ name: name.replace(regexpReader, '') })
      }
    }
  },
  beforeMount() {
    window.addEventListener('keyup', this.keyupHandler)
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.keyupHandler)
  }
}
</script>
<style lang="scss" src="./styles/style.scss">
</style>
