<style lang="scss" src="./style.scss" scoped></style>
<template src="./template.html"></template>
<script>
import Portrait from '@/components/Portrait'
export default {
  name: 'skill-information',
  props: {
    it: {
      type: Object,
      required: true,
      default: {
        id: 0,
        nickname: '',
        name_CH: '',
        name_JP: '',
        name_KR: '',
        avatar: '',
        star: '',
        type: '',
        profession: '',
        recommended: '0',
        cooldown: '',
        LeaderSkill: '',
        BaseSkill: '',
        NormalSkill: '',
        SlideSkill: '',
        DriveSkill: '',
        createDate: '',
        createUser: null
      }
    }
  },
  components: {
    Portrait
  },
  methods: {
    numberHighlight(text) {
      return text.replace(/[(\+|\-)?\d.?\d]+/gi, mathText => {
        return `<span class="highlight">${mathText}</span>`
      })
    }
  }
}
</script>