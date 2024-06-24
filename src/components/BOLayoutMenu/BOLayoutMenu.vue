<script>
import { ElContainer, ElAside, ElScrollbar, ElMenu } from 'element-plus'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    bgColor: {
      type: String,
      default: '#272C33'
    },
    logoUrlSmall: {
      type: String,
      required: true
    },
    logoUrlLarge: {
      type: String,
      required: true
    },
    menuVisible: {
      type: Boolean,
      required: true
    },
    userAccount: {
      type: String,
      required: true,
      default: 'user name'
    },
    userId: {
      type: String,
      required: true,
      default: '0001'
    },
    userIcon: {
      type: Object,
      default: () => faCircleUser
    }
  },
  components: {
    ElContainer,
    ElAside,
    ElScrollbar,
    ElMenu,
    FontAwesomeIcon
  }
}
</script>

<template>
  <el-container :style="{ background: bgColor }" :class="{ 'd-none': !menuVisible }">
    <el-aside >

      <li class="menu-logo-pic el-sub-menu d-flex">
        <div class="menu-logo-pic-s">
          <img :src="logoUrlSmall">
        </div>
        <div class="menu-logo-pic-l">
          <img :src="logoUrlLarge">
        </div>
      </li>
      <el-scrollbar>
        <el-menu class="mt-0">
          <div class="menu-group-link">
            <slot></slot>
          </div>
        </el-menu>
      </el-scrollbar>

      <div class="user-status">
        <div class="user-text d-flex align-items-center">
          <FontAwesomeIcon :icon="userIcon"></FontAwesomeIcon>
          <div class="ml-4">{{ userAccount }} | {{ userId }}</div>
        </div>
        <div class="logout-btn">Log Out</div>
      </div>

    </el-aside>
  </el-container>
</template>

<style>
.el-container {
  z-index: 2;
}
.user-status {
  width: 300px;
  color: #ffffff;
  margin-bottom: 30px;
  font-size: 1.2rem;
  padding: 0 20px;
}
.user-status svg {
  width: 20px;
  height: 20px;
}
.user-text {
  margin-bottom: 20px;
}
.logout-btn {
  background: #ffffff;
  color: #272C33;
  font-weight: bold;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
}
.menu-logo-pic {
  margin-top: 65px
}
.menu-logo-pic-s, .menu-logo-pic-l {
  display: none;
}
.el-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
}
.el-aside {
   width: auto;
   display: flex;
  flex-flow: column;
  justify-content: space-between;
}
.el-scrollbar{
  height: 100%;
}
.el-menu {
  background: transparent;
  border-right: 0;
  padding: 0;
}
.el-menu--inline {
  margin-top: 0;
}
.el-sub-menu__title:hover {
  background-color: transparent
}
.el-sub-menu__title svg{
  width: 20px;
  height: 20px;
}
.el-sub-menu__icon-arrow {
  display: block;
}
@media (min-width: 992px) {
  .user-status {
    margin-bottom: 65px;
  }
  .menu-logo-pic-s {
    display: block;
    width: 35px;
    height: 56px;
    line-height: 56px;
    margin-left: 13px;
  }
  .menu-logo-pic-l {
    display: block;
    width: 130px;
    height: 56px;
    line-height: 56px;
    margin-left: 16px;
  }
  .menu-logo-pic-s img, .menu-logo-pic-l img {
    width: 100%;
  }
  .el-sub-menu {
    width: 300px;
  }
  .user-text {
    margin-bottom: 0px;
  }
  .logout-btn {
    display: none;
  }
  .el-container {
    width: 65px;
    overflow: hidden;
    transition: 0.3s;
  }
  .el-container:hover {
    width: 300px;
    overflow: hidden;
  }
  .el-container:hover .logout-btn {
    display: block;
  }
  .el-container:hover .user-text {
    margin-bottom: 20px
  }
}
</style>
