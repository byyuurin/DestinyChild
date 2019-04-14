<style lang="scss" src="./style.scss" scoped></style>
<template src="./template.html"></template>
<script>
import SoulCartaPortrait from '@/components/SoulCartaPortrait'
import SoulCartaInformation from '@/components/SoulCartaInformation'
import CollectionInfo from '@/components/CollectionInfo'

export default {
  name: 'soul-carta',
  data() {
    return {
      showUnknown: true
    }
  },
  computed: {
    editable() {
      return this.$store.state.editorEnabled
    },
    groupSize() {
      return this.$store.state.groupConfig.soulCarta
    },
    soulCarta() {
      const { icon } = this.$route.params
      const data = this.soulCartaMap[icon] || null
      if (this.soulCartaList.length && data) {
        document.title = document.title.replace('{name}', data.name_jp)
      }
      return data
    },
    soulCartaList() {
      return this.$store.state.soulCartaList
    },
    soulCartaMap() {
      let map = {}
      this.soulCartaList.forEach(it => {
        map[it.icon] = it
      })
      return map
    },
    soulCartaGroups() {
      let groups = {}

      Object.keys(this.groupSize).forEach(group => {
        if (!groups[group]) {
          groups[group] = []
        }
        for (let i = 1; i <= this.groupSize[group]; i++) {
          let icon = group + '-' + this.numberToString(i, 3)
          let soulCartaCard = this.soulCartaMap[icon] || { icon }
          groups[group].push(soulCartaCard)
        }
        groups[group] = groups[group].reverse()
      })
      return groups
    }
  },
  created() {
    this.$store.dispatch('APP_INIT')
    window.document.body.style = 'background-image: none;'

    const waitStore = () => {
      if (this.soulCartaList.length) {
        if (document.title.indexOf('{name}') >= 0) {
          this.$router.replace({ name: this.$route.name.split('-')[0] })
        }
      } else {
        setTimeout(waitStore, 10)
      }
    }
    waitStore()
  },
  methods: {
    lockWindow(isLock) {
      if (isLock) {
        document.body.classList.add('locked')
      } else {
        document.body.classList.remove('locked')
      }
    },
    numberToString(number, minLength) {
      let strNumbers = number.toString().split('')
      for (let i = strNumbers.length; i < minLength; i++) {
        strNumbers.unshift('0')
      }
      return strNumbers.join('')
    },
    getGroupStars(group) {
      let stars = 1
      if (/soul-\d/.test(group)) {
        stars = group.replace(/soul-/, '') * 1
      }
      return stars
    },
    getCollectionCounts(soulCartaList) {
      let counts = 0
      soulCartaList.forEach(soulCarta => {
        if (soulCarta.id) {
          counts++
        }
      })
      return counts
    },
    informationHandler(icon) {
      const data = this.soulCartaMap[icon] || {}

      if (!data.id) return false

      this.$router.push({
        name: 'SoulCarta-Reader',
        params: {
          icon
        }
      })
    },
    closeInformationHandler() {
      this.$router.push({
        name: 'SoulCarta'
      })
    },
    editHandler(icon) {
      const group = 'soulCarta'
      const target = this.soulCartaMap[icon]
      if (this.editable) {
        if (target) {
          this.$router.push({ path: `/form/${group}/${icon}` })
        } else {
          this.$router.push({ path: `/form/${group}?icon=${icon}` })
        }
      }
    }
  },
  beforeDestroy() {
    this.lockWindow(false)
    window.document.body.style = ''
  },
  components: {
    CollectionInfo,
    SoulCartaPortrait,
    SoulCartaInformation
  }
}
</script>
