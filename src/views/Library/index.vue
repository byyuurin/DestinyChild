<style lang="scss" src="./style.scss" scoped></style>
<template src="./template.html"></template>
<script>
import Portrait from '@/components/Portrait'
import SkillInformation from '@/components/SkillInformation'
import CharacterStar from '@/components/CharacterStar'

export default {
  name: 'library',
  data() {
    return {
      character: null,
      openFilter: false,
      showUnknown: false,
      groupSize: {
        'child-5': 108,
        'child-4': 64,
        'child-3': 97,
        'child-2': 53,
        'child-1': 44
      },
      types: ['fire', 'water', 'forest', 'light', 'dark'],
      professions: ['attack', 'protect', 'support', 'confusion', 'medic'],
      filter: {}
    }
  },
  computed: {
    filteredCharacters() {
      return this.$store.state.characters.filter(it => {
        let { name, type, profession } = this.filter
        let isFind = true

        if (name) {
          isFind = it.nickname.indexOf(name) >= 0
          isFind = isFind || it.name_CH.indexOf(name) >= 0
        }

        if (it.type) {
          isFind = isFind && type[it.type]
        }
        if (it.profession) {
          isFind = isFind && profession[it.profession]
        }

        return isFind
      })
    },
    characters() {
      return this.filteredCharacters
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
  watch: {
    openFilter() {
      this.lockWindow(this.openFilter)
    }
  },
  created() {
    this.$store.dispatch('CHARACTER_READ')

    this.types.forEach(it => {
      this.filter.type = {}
      this.types.forEach(it => {
        this.filter.type[it] = true
      })

      this.filter.profession = {}
      this.professions.forEach(it => {
        this.filter.profession[it] = true
      })

      this.filter.name = ''
    })
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
      if (/child-\d/.test(group)) {
        stars = group.replace(/child-/, '') * 1
      }
      return stars
    },
    getCollectionCounts(characters) {
      let counts = 0
      characters.forEach(character => {
        if (this.showUnknown && character.type) {
          counts++
        } else if (!this.showUnknown && character.id) {
          counts++
        }
      })
      return counts
    },
    filterClone() {
      let { name, type, profession } = this.filter
      let filter = {}

      filter.name = name

      this.types.forEach(it => {
        filter.type = {}
        this.types.forEach(it => {
          filter.type[it] = type[it]
        })

        filter.profession = {}
        this.professions.forEach(it => {
          filter.profession[it] = profession[it]
        })
      })
      return filter
    },
    filterHandler(key, target) {
      let filter = this.filterClone()

      if (key === 'name') {
        filter[key] = target.value
      } else {
        let keys = key.split('.')
        filter[keys[0]][keys[1]] = target.checked
      }
      this.filter = filter
    },
    informationHandler(avatar) {
      const character = this.characterMap[avatar] || null
      if (character) {
        this.character = character
        this.lockWindow(true)
      }
    },
    closeInformationHandler() {
      this.character = null
      this.lockWindow(false)
    }
  },
  beforeDestroy() {
    this.lockWindow(false)
  },
  components: {
    Portrait,
    SkillInformation,
    CharacterStar
  }
}
</script>
