<style lang="scss" src="./style.scss" scoped></style>
<template src="./template.html"></template>
<script>
import CharacterPortrait from '@/components/CharacterPortrait'
import SkillInformation from '@/components/SkillInformation'
import CollectionInfo from '@/components/CollectionInfo'

const LocalStorateSaveKey = 'characterFilterSetting'
export default {
  name: 'library',
  data() {
    return {
      openFilter: false,
      openSearch: false,
      showUnknown: false,
      types: ['fire', 'water', 'forest', 'light', 'dark'],
      professions: ['attack', 'protect', 'support', 'confusion', 'medic'],
      filter: {}
    }
  },
  computed: {
    editable() {
      return this.$store.state.editorEnabled
    },
    groupSize() {
      return this.$store.state.groupConfig.character
    },
    filteredCharacters() {
      return this.$store.state.characters.filter(it => {
        const { name, type, profession } = this.filter

        if (!name && !type && !profession) {
          return true
        }

        let isFind = true

        if (name) {
          isFind = it.nickname.indexOf(name) >= 0
          isFind = isFind || it.name_CH.indexOf(name) >= 0
          isFind = isFind || it.name_JP.indexOf(name) >= 0
          isFind = isFind || it.name_KR.indexOf(name) >= 0
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
    character() {
      const { icon } = this.$route.params
      const data = this.characterMap[icon] || null
      if (this.characters.length) {
        document.title = document.title.replace(
          '{name}',
          data ? `${data.name_CH}(${data.name_JP})` : ''
        )
      }
      this.lockWindow(!!data)
      return data
    },
    characters() {
      // this.saveFilterSetting()
      return this.filteredCharacters
    },
    characterMap() {
      let map = {}
      this.characters.forEach(it => {
        map[it.icon] = it
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
          let icon = group + '-' + this.numberToString(i, 3)
          let character = this.characterMap[icon]

          if (this.showUnknown && !character) {
            character = { icon }
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
          }
          if (character) {
            groups[group].push(character)
          }
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
    this.$store.dispatch('APP_INIT')

    // const filterSaveSettings = localStorage.getItem(LocalStorateSaveKey)

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

    window.document.body.style = 'background-image: none;'
  },
  beforeMount() {
    this.showUnknown = this.editable
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
    informationHandler(icon) {
      const data = this.characterMap[icon] || {}

      if (!data.id) return false

      this.$router.push({
        name: 'Library-Reader',
        params: {
          icon
        }
      })
    },
    closeInformationHandler() {
      this.$router.push({
        name: 'Library'
      })
    },
    editHandler(icon) {
      const group = 'character'
      const target = this.characterMap[icon]
      if (this.editable) {
        if (target) {
          this.$router.push({ path: `/form/${group}/${icon}` })
        } else {
          this.$router.push({ path: `/form/${group}?icon=${icon}` })
        }
      }
    },
    saveFilterSetting() {
      localStorage.setItem(LocalStorateSaveKey, JSON.stringify(this.filter))
    }
  },
  beforeDestroy() {
    this.lockWindow(false)
    window.document.body.style = ''
  },
  components: {
    CharacterPortrait,
    SkillInformation,
    CollectionInfo
  }
}
</script>
