<style lang="scss" src="./style.scss" scoped></style>
<template src="./template.html"></template>
<script>
export default {
  name: 'soul-carta-information',
  props: {
    it: {
      type: Object,
      required: true,
      default() {
        return {
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
    }
  },
  data() {
    return {
      isFrameHidden: false
    }
  },
  computed: {
    star() {
      return this.it.icon.substring(0, 6).replace(/soul-/, '') * 1
    }
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
  },
  filters: {
    numberWithComma(n) {
      let regex = /(-?\d+)(\d{3})/
      let s = n.toString()
      while (regex.test(s)) {
        s = s.replace(regex, '$1,$2')
      }
      return s
    }
  }
}
</script>
