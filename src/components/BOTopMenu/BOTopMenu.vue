<script>
import { ElMenu } from 'element-plus'

export default {
  props: {
    layoutType: {
      type: String,
      default: 'container'
    },
    textColor: {
      type: String
    },
    activeTextColor: {
      type: String
    },
    activeIndex: {
      type: String
    }
  },
  components: {
    ElMenu
  }
}
</script>

<template>

  <nav class="top-menu">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      :default-active="activeIndex"
      :class="layoutType"
      :text-color="textColor"
      :active-text-color="activeTextColor"
    >
      <slot></slot>

    </el-menu>
  </nav>

</template>

<style>
.top-menu{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  background: #ffffff;
  box-shadow: 0 4px 6px 0 rgba(0,0,0,0.10);
}
.el-menu {
  margin-top: 65px;
  padding: 0 var(--el-menu-base-level-padding) 0 0;
}
.el-menu--horizontal.el-menu {
  border-bottom: solid 0px transparent;
}
.el-menu--popup {
  margin-top: 0;
}
</style>
