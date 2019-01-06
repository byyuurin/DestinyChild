<template>
  <div id="app">
    <!-- <global-header/> -->
    <router-view/>
    <global-footer/>
  </div>
</template>
<script>
// import GlobalHeader from '@/components/GlobalHeader'
import GlobalFooter from '@/components/GlobalFooter'
export default {
  components: {
    // GlobalHeader,
    GlobalFooter
  }
}
</script>
<style lang="scss" src="./styles/style.scss">
</style>
