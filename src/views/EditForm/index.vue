<style lang="scss" src="./style.scss" scoped></style>
<template src="./template.html"></template>
<script>
import CharacterForm from '@/components/CharacterForm'
import SoulCartaForm from '@/components/SoulCartaForm'

export default {
  name: 'edit-form',
  data() {
    return {
      formName: '',
      icon: ''
    }
  },
  computed: {
    template() {
      return this.formName
    }
  },
  created() {
    const validFormNames = ['character', 'soulCarta']
    const { formName, icon } = this.$route.params
    let isParamValid = true

    if (validFormNames.indexOf(formName) < 0) {
      isParamValid = false
    }

    if (icon && !/^\w+-\d{1}-\d{3}$/.test(icon)) {
      isParamValid = false
    }

    if (!isParamValid) {
      this.$router.replace({ name: 'home' })
    }

    this.formName = formName.charAt(0).toUpperCase() + formName.slice(1)
    this.icon = icon
  },
  components: {
    CharacterForm,
    SoulCartaForm
  }
}
</script>
