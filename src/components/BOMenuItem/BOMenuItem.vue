<script>
import { ElMenuItem } from 'element-plus'

export default {
  props: {
    routeName: {
      type: String,
      required: true
    },
    routeTitle: {
      type: String,
      required: true,
      default: 'menu item'
    },
    routeIndex: {
      type: String,
      required: true
    },
    textColor: {
      type: String,
      default: '#272C33'
    }
  },
  components: {
    ElMenuItem
  }
}
</script>

<template>

  <el-menu-item :index="routeIndex">
    <RouterLink :to="{ name: routeName }" :style="{ color : textColor }">{{ routeTitle }}</RouterLink>
  </el-menu-item>

</template>

<style>
.el-menu-item{
  padding: 0;
}
.el-menu-item a{
  font-size: 1rem;
  width: 100%;
  padding: 0 35px;
}
.el-menu-item:hover {
  background-color: transparent
}
</style>
