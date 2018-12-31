<style lang="scss" src="./style.scss" scoped></style>
<template src="./template.html"></template>
<script>
import Portrait from '@/components/Portrait'
import SkillInformation from '@/components/SkillInformation'

export default {
  name: 'library',
  data() {
    return {
      character: null,
      groupSize: {
        'child-5': 108,
        'child-4': 64,
        'child-3': 97,
        'child-2': 53,
        'child-1': 44
      }
    }
  },
  computed: {
    characters() {
      return this.$store.state.characters
    },
    characterMap() {
      let map = {}
      this.characters.forEach(it => {
        map[it.avatar] = it
      })
      return map
    },
    characterGroups() {
      let groups = {}
      let slimeType = ['water', 'fire', 'forest', 'light', 'dark', 'fire']

      Object.keys(this.groupSize).forEach(group => {
        if (!groups[group]) {
          groups[group] = []
        }
        for (let i = 1; i <= this.groupSize[group]; i++) {
          let avatar = group + '-' + this.numberToString(i, 3)
          let character = this.characterMap[avatar] || { avatar }

          if (i <= 6) {
            if (i === 6) {
              character.name_CH = '進化素材'
              character.name_JP = 'オロラミム'
            } else {
              character.name_CH = '強化素材'
              character.name_JP = 'アオラミム'
            }
            character.type = slimeType[i - 1]
            character.profession = ''
          } else if (!character.type) {
            character.name_CH = '無資料'
            character.name_JP = 'Unknown'
          }

          groups[group].push(character)
        }
        groups[group] = groups[group].reverse()
      })

      return groups
    }
  },
  created() {
    this.$store.dispatch('CHARACTER_READ')
  },
  methods: {
    numberToString(number, minLength) {
      let strNumbers = number.toString().split('')
      for (let i = strNumbers.length; i < minLength; i++) {
        strNumbers.unshift('0')
      }
      return strNumbers.join('')
    },
    informationHandler(avatar) {
      const character = this.characterMap[avatar] || null
      if (character) {
        this.character = character
        document.body.classList.add('locked')
      }
    },
    closeInformationHandler() {
      this.character = null
      document.body.classList.remove('locked')
    }
  },
  beforeDestroy() {
    document.body.classList.remove('locked')
  },
  components: {
    Portrait,
    SkillInformation
  }
}
</script>
