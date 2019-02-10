<style lang="scss" src="./style.scss" scoped></style>
<template src="./template.html"></template>
<script>
import CharacterPortrait from '@/components/CharacterPortrait'
import SkillInformation from '@/components/SkillInformation'

export default {
  name: 'character-form',
  props: {
    icon: {
      type: String,
      default() {
        return this.$route.query.icon
      }
    }
  },
  data() {
    return {
      types: ['fire', 'water', 'forest', 'light', 'dark'],
      typeText: ['火屬性', '水屬性', '木屬性', '光屬性', '闇屬性'],
      professions: ['attack', 'protect', 'support', 'confusion', 'medic'],
      professionText: ['攻擊型', '防禦型', '支援型', '妨礙型', '回復型'],
      formData: {
        id: 0,
        nickname: '',
        name_CH: '',
        name_JP: '',
        name_KR: '',
        icon: '',
        star: '',
        type: '',
        profession: '',
        recommended: '0',
        cooldown: '',
        LeaderSkill: '',
        BaseSkill: '對目標造成___點基本攻擊（自動）',
        NormalSkill: '',
        SlideSkill: '',
        DriveSkill: '',
        createDate: '',
        createUser: null,
        model: []
      }
    }
  },
  computed: {
    rawList() {
      return this.$store.state.characters
    },
    dataMap() {
      const map = {}
      this.rawList.forEach(it => {
        map[it.icon] = it
      })
      return map
    },
    rawData() {
      return this.dataMap[this.$props.icon]
    }
  },
  beforeCreate() {
    this.$store.dispatch('CHARACTER_READ')
  },
  created() {
    this.formData.icon = this.$props.icon
    this.formData.star = this.$props.icon.substring(0, 7).replace(/[a-z]+-/, '')
  },
  methods: {
    home() {
      this.$router.replace('/')
    },
    closeHandler() {
      this.$router.go(-1)
    },
    professionChangeHandler() {
      const profession = this.formData.profession
      const defaultCooldown = [8, 7, 7, 8, 10]
      let cooldown = defaultCooldown[this.professions.indexOf(profession)]
      if (this.formData.star * 1 === 5 && profession === 'medic') {
        cooldown = 9
      }
      this.formData.cooldown = cooldown
    },
    submitHandler() {
      let isValid = true
      let errorMsg = []
      const uncheck = ['id', 'createUser', 'createDate']

      Object.keys(this.formData).forEach(key => {
        if (!this.formData[key] && uncheck.indexOf(key) < 0) {
          errorMsg.push(key + ' is empty\n')
          isValid = false
        }
      })
      if (isValid) {
        this.$store
          .dispatch(
            this.formData.id ? 'CHARACTER_UPDATE' : 'CHARACTER_CREATE',
            this.formData
          )
          .then(() => {
            console.log(this.rawList)
            this.closeHandler()
          })
      } else {
        console.log('[FORM CHECK]', isValid, '\n', errorMsg.join(''))
      }
    }
  },
  watch: {
    rawList() {
      if (!this.$route.query.icon && this.rawList.length && !this.rawData) {
        console.log('[ERROR UPDATE URL]', location.href)
        this.home()
      }
    },
    rawData() {
      if (this.rawData.icon === this.$route.query.icon) {
        console.log('[ERROR CREATE URL]', location.href)
        this.home()
      }
      Object.keys(this.rawData).forEach(key => {
        this.formData[key] = this.rawData[key]
      })
    }
  },
  components: {
    CharacterPortrait,
    SkillInformation
  }
}
</script>
