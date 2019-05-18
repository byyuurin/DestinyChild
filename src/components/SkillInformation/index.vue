<style lang="scss" src="./style.scss" scoped></style>
<template src="./template.html"></template>
<script>
import CharacterPortrait from '@/components/CharacterPortrait'
export default {
  name: 'skill-information',
  props: {
    it: {
      type: Object,
      required: true,
      default() {
        return {
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
    }
  },
  components: {
    CharacterPortrait
  },
  methods: {
    numberHighlight(text) {
      return text.replace(/[(+|\-)?\d.?\d(%)?]+/gi, mathText => {
        return `<span class="highlight">${mathText}</span>`
      })
    },
    spaceToBr(s) {
      if (!s) return ''

      return s.split(' ').join('<br/>')
    }
  }
}
</script>
