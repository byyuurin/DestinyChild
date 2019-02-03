<style lang="scss" src="./style.scss" scoped></style>
<template src="./template.html"></template>
<script>
export default {
  name: 'narrative',
  data() {
    return {
      boost: 100,
      settings: [],
      showIndex: 0
    }
  },
  computed: {
    setting() {
      const settingData = this.settings[this.showIndex] || {}
      if (settingData.banner) {
        settingData.banner = settingData.banner.replace('http://', 'https://')
      }
      return settingData
    },
    eventDays() {
      if (!this.setting) return 0

      const eventStart = new Date(this.setting.eventStart)
      const eventEnd = new Date(this.setting.eventEnd)

      return Math.ceil((eventEnd - eventStart) / 1000 / 60 / 60 / 24)
    },
    dayList() {
      let dayList = []
      if (this.setting) {
        const eventStart = new Date(this.setting.eventStart)

        for (let i = 0; i < this.eventDays; i++) {
          let day = new Date(eventStart.getTime() + i * 1000 * 60 * 60 * 24)
          dayList.push(day.toLocaleDateString())
        }
      }
      return dayList
    },
    remainingDays() {
      if (!this.setting) return 0

      const eventEnd = new Date(this.setting.eventEnd)
      const today = new Date()

      return Math.ceil((eventEnd - today) / 1000 / 60 / 60 / 24)
    },
    isEventEnd() {
      return this.remainingDays < 0
    }
  },
  methods: {
    expectedReward(x = 1) {
      if (!this.setting.reward) return 0

      const battleCounts = this.setting.reward.length
      let totalReward = 0

      for (let i = 0; i < battleCounts; i++) {
        let battleRound = i + 1
        let battleReward = this.setting.reward[i]
        let boxCount = this.setting.maxFreeBox

        if (battleRound === battleCounts) {
          const boxReward = { normal: 0, boss: 0 }
          let rewardCount = this.setting.boxReward.normal.length
          let sumBoxReward = 0

          for (let bx = 0; bx < rewardCount; bx++) {
            let reward, rewardOdds

            // Normal Round reward
            reward = this.setting.boxReward.normal[bx]
            rewardOdds = this.setting.boxRewardOdds.normal[bx]
            boxReward.normal += reward * rewardOdds * boxCount

            // Boss Round reward
            reward = this.setting.boxReward.boss[bx]
            rewardOdds = this.setting.boxRewardOdds.boss[bx]
            boxReward.boss += reward * rewardOdds * boxCount
          }

          sumBoxReward += boxReward.normal * (battleCounts - 1)
          sumBoxReward += boxReward.boss
          totalReward += battleReward + sumBoxReward
        } else {
          // Normal Round
          totalReward += battleReward
        }
      }

      return Math.floor(totalReward * x * this.boost) / 100
    },
    minReward(day, target) {
      let avgReward = target / this.eventDays
      return Math.round(avgReward * day)
    },
    isToday(d) {
      let today = new Date()
      let day = new Date(d)
      today.setHours(0)
      today.setMinutes(0)
      today.setSeconds(0)
      today.setMilliseconds(0)
      return day - today === 0
    },
    changeShowIndex(offset) {
      let afterIndex = this.showIndex + offset
      let settingLength = this.settings.length

      if (afterIndex >= settingLength) {
        afterIndex = settingLength - 1
      }

      if (afterIndex < 0) {
        afterIndex = 0
      }

      // 只有 showIndex 變動時才將 boost 重置回預設值
      if (this.showIndex !== afterIndex) {
        this.boost = 100
      }

      this.showIndex = afterIndex
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
  },
  created() {
    fetch('./api/narrative.json')
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.settings = data
        this.showIndex = data.length - 1
      })
  },
  watch: {
    showIndex() {
      this.boost = 100
    }
  }
}
</script>
