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
      showUnknown: true,
      groupSize: {
        'soul-5': 46,
        'soul-4': 13,
        'soul-3': 9
      },
      soulCarta: null
    }
  },
  computed: {
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
    this.$store.dispatch('SOUL_CARTA_READ')
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
        if (this.showUnknown && soulCartaList.id) {
          counts++
        } else if (!this.showUnknown && soulCartaList.id) {
          counts++
        }
      })
      return counts
    },
    informationHandler(icon) {
      const soulCarta = this.soulCartaMap[icon] || { icon }
      if (soulCarta) {
        this.soulCarta = soulCarta
        this.lockWindow(true)
      }
    },
    closeInformationHandler() {
      this.soulCarta = null
      this.lockWindow(false)
    }
  },
  components: {
    CollectionInfo,
    SoulCartaPortrait,
    SoulCartaInformation
  }
}
</script>
