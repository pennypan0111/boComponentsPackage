<script>
export default {
  methods: {
    handleTimeUp() {
      alert('時間到!')
    }
  }
}
</script>

<template>
  <BOCountdown :hours="24" :minutes="0" :seconds="0" actionDescribe="後自動登出" @timeUp="handleTimeUp"></BOCountdown>
</template>
