<style lang="scss" src="./style.scss" scoped></style>
<template src="./template.html"></template>
<script>
import SoulCartaInformation from '@/components/SoulCartaInformation'

export default {
  name: 'soul-carta-form',
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
      formData: {
        id: 0,
        name_ch: '',
        name_jp: '',
        icon: '',
        hp: 0,
        atk: 0,
        def: 0,
        agl: 0,
        crt: 0,
        description: '',
        effect: ''
      }
    }
  },
  computed: {
    rawList() {
      return this.$store.state.soulCartaList
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
    this.$store.dispatch('SOUL_CARTA_READ')
  },
  created() {
    this.formData.icon = this.$props.icon
  },
  methods: {
    home() {
      this.$router.replace('/')
    },
    closeHandler() {
      this.$router.go(-1)
    },
    submitHandler() {
      let isValid = true
      let errorMsg = []
      const checkColumn = ['name_jp', 'effect']
      Object.keys(this.formData).forEach(key => {
        if (!this.formData[key] && checkColumn.indexOf(key) >= 0) {
          errorMsg.push(key + ' is empty\n')
          isValid = false
        }
      })
      if (isValid) {
        this.$store
          .dispatch(
            this.formData.id ? 'SOUL_CARTA_UPDATE' : 'SOUL_CARTA_CREATE',
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
    SoulCartaInformation
  }
}
</script>
