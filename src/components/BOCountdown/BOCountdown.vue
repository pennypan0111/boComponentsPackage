<script>
export default {
  props: {
    hours: {
      type: Number,
      default: 0
    },
    minutes: {
      type: Number,
      default: 0
    },
    seconds: {
      type: Number,
      default: 0
    },
    actionDescribe: {
      type: String,
      default: ''
    }
  },
  emits: ['timeUp'],
  data() {
    return {
      currentTime: (this.hours * 3600) + (this.minutes * 60) + (this.seconds),
      timerCountdown: null
    }
  },
  computed: {
    displayTime () {
      const hours = Math.floor(this.currentTime / 3600)
      const minutes = Math.floor((this.currentTime % 3600) / 60)
      const seconds = this.currentTime % 60

      let display = ''
      if (hours > 0) {
        display += `${String(hours).padStart(2, '0')}時`
      }
      if (minutes > 0 || hours > 0) {
        display += `${String(minutes).padStart(2, '0')}分`
      }
      display += `${String(seconds).padStart(2, '0')}秒`
      return `${display}${this.actionDescribe}`
    }
  },
  methods: {
    startTimer() {
      this.timerCountdown = setInterval(() => {
        if (this.currentTime > 0) {
          this.currentTime--
        } else {
          this.$emit('timeUp')
          this.stopTimer()
        }
      }, 1000)
    },
    stopTimer() {
      clearInterval(this.timerCountdown)
      this.timerCountdown = null
    }
  },
  mounted() {
    this.startTimer()
  },
  beforeUnmount() {
    this.stopTimer()
  }
}
</script>

<template>
  <div>{{ displayTime }} </div>
</template>
