<script>
import { ElSubMenu } from 'element-plus'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    groupIndex: {
      type: String,
      required: true
    },
    groupTitle: {
      type: String,
      default: 'group item'
    },
    groupItemIcon: {
      type: Object,
      default: () => faFileLines
    }
  },
  components: {
    ElSubMenu,
    FontAwesomeIcon
  }
}
</script>

<template>
  <el-sub-menu :index="groupIndex" class="menu-group">

    <template #title>
      <font-awesome-icon :icon="groupItemIcon" />
      <span class="ml-4">{{ groupTitle }}</span>
    </template>

    <slot></slot>

  </el-sub-menu>
</template>

<style>
.menu-group svg, .menu-group span {
  color: #ffffff;
  font-size: 1.2rem;
}
</style>
