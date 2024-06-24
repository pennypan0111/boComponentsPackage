<script>
import { RouterView } from 'vue-router'

export default {
  data() {
    return {
      menuVal: true
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleWindowResize)
  },
  methods: {
    getDisplayMenuVal() {
      this.menuVal = !this.menuVal
    },
    handleWindowResize () {
      if (window.innerWidth > 992) {
        this.menuVal = true
      } else {
        this.menuVal = false
      }
    }
  },
  components: {
    RouterView
  }
}
</script>

<template>

  <!-- <BOTopHeader logoUrl="../public/img/Dynasafe_logo_red.png"></BOTopHeader>
  <BOTopMenu>

    <BOMenuItem routeName="CustomElMessageBoxView" routeTitle="ElMessageBox" routeIndex="1"></BOMenuItem>
    <BOMenuItem routeName="CustomElLoadingView" routeTitle="ElLoading" routeIndex="2"></BOMenuItem>

  </BOTopMenu> -->

  <BOLayoutHeader logoUrl="../public/img/Dynasafe_logo_red.png" @displayMenu="getDisplayMenuVal"></BOLayoutHeader>

  <BOLayoutMenu
    :menuVisible="menuVal"
    logoUrlSmall="../public/img/Dynasafe_logo_small.png"
    logoUrlLarge="../public/img/Dynasafe_logo_red.png"
    userAccount="admin"
    userId="0000"
  >

    <BOMenuGroup groupTitle="BOMethods" groupIndex="1">
      <BOMenuItem textColor="#ffffff" routeName="CustomElMessageBoxView" routeTitle="Message Box" routeIndex="1-1" ></BOMenuItem>
      <BOMenuItem textColor="#ffffff" routeName="CustomElLoadingView" routeTitle="Loading" routeIndex="1-2"></BOMenuItem>
    </BOMenuGroup>
    <BOMenuGroup groupTitle="BOComponents" groupIndex="2">
      <BOMenuItem textColor="#ffffff" routeName="CustomCountdownView" routeTitle="Countdown" routeIndex="2-1"></BOMenuItem>
    </BOMenuGroup>

  </BOLayoutMenu>

  <div class="pt-5 container">
    <RouterView />
  </div>

</template>
