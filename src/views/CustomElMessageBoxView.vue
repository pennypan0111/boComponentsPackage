<script>
export default {
  methods: {
    customElMessageBox() {
      this.$BOMessageBox('測試標題', '測試內文', 'success', 'OK')
    }
  }
}
</script>

<template>
  <div>Click Button to Test Customization Element-Plus Message Box Package</div>
  <el-button type="primary" @click="customElMessageBox">Show Message Box</el-button>
</template>
