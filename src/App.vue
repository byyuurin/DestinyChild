<template>
  <div id="app">
    <global-header/>
    <div class="main">
      <router-view/>
    </div>
    <global-footer/>
  </div>
</template>
<script>
import GlobalHeader from '@/components/GlobalHeader'
import GlobalFooter from '@/components/GlobalFooter'
export default {
  data() {
    return {
      db: []
    }
  },
  components: {
    GlobalHeader,
    GlobalFooter
  },
  mounted() {
    // fetch('https://dc.u030y.lionfree.net/ChildList/api/portrait')
    //   .then(res => {
    //     return res.json()
    //   })
    //   .then(data => {
    //     this.db = data
    //   })
  }
}
</script>
<style lang="scss" src="./styles/style.scss">
</style>
