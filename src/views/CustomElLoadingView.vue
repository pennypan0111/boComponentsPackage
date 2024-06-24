<script>
export default {
  methods: {
    customElLoading() {
      this.$BOLoading()
    }
  }
}
</script>

<template>
  <div>Click Button to Test Customization Element-Plus Loading Package</div>
  <el-button type="primary" @click="customElLoading">Show Loading</el-button>
</template>
