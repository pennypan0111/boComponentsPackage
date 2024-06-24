<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

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
  data() {
    return {
      userIcon: faCircleUser
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<template>

  <header class="top-header" :style="{ background: bgColor }">
    <div class="w-100 h-100 d-flex align-items-center" :class="layoutType">

      <div class="logo-pic">
        <img :src='logoUrl'/>
      </div>

      <div class="user-btn">
        <font-awesome-icon :icon="userIcon"/>
      </div>

    </div>
  </header>

</template>

<style>
.top-header {
  width: 100%;
  height: 65px;
  position: fixed;
  top: 0;
  z-index: 3;
  box-shadow: 0 4px 6px 0 rgba(0,0,0,0.10);
}
.logo-pic {
  width: 160px;
  margin: 0 auto;
}
.logo-pic img {
  width: 100%;
}
.user-btn {
  font-size: 1.6rem;
  color: #ffffff;
  cursor: pointer;
}
</style>
