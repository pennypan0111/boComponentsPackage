<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    bgColor: {
      type: String,
      default: '#272C33'
    },
    logoUrl: {
      type: String,
      required: true
    },
    layoutType: {
      type: String,
      default: 'container'
    }
  },
  emit: ['displayMenu'],
  data() {
    return {
      menuIcon: faBars,
      menuVisible: true
    }
  },
  methods: {
    clickMenuBtn() {
      this.menuVisible = !this.menuVisible
      this.$emit('displayMenu', this.menuVisible)
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<template>
  <header class="layout-header" :style="{ background: bgColor }">
    <div class="w-100 h-100 d-flex align-items-center" :class="layoutType">

      <div class="menu-bar" @click="clickMenuBtn">
        <font-awesome-icon :icon="menuIcon"/>
      </div>

      <div class="header-logo-pic">
        <img :src='logoUrl'/>
      </div>

    </div>
  </header>
</template>

<style>
.layout-header {
  width: 100%;
  height: 65px;
  position: fixed;
  top: 0;
  z-index: 3;
  box-shadow: 0 4px 6px 0 rgba(0,0,0,0.10);
}
.header-logo-pic {
  width: 160px;
  margin: 0 auto;
}
.header-logo-pic img {
  width: 100%;
}
.menu-bar {
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
}
@media (min-width: 992px) {
  .layout-header {
    display: none;
  }
}
</style>
