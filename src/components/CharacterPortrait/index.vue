<style lang="scss" src="./style.scss" scoped></style>
<template src="./template.html"></template>
<script>
export default {
  name: 'character-portrait',
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
          icon: '',
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
    hasHoverEffect: {
      type: Boolean,
      required: false,
      default: true
    }
  }
}
</script>
