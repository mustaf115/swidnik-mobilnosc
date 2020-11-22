<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
	  <sidebar-link to="/panel">
        <md-icon>dashboard</md-icon>
        <p>Panel administracyjny</p>
      </sidebar-link>
	  <sidebar-link to="/mapa">
        <md-icon>location_on</md-icon>
        <p>Mapa miasta</p>
      </sidebar-link>
	  <sidebar-link to="/rozklad">
        <md-icon>schedule</md-icon>
        <p>Rozklad jazdy</p>
      </sidebar-link>
	  <sidebar-link to="/ankiety">
        <md-icon>device_unknown</md-icon>
        <p>Ankiety</p>
      </sidebar-link>
      <sidebar-link to="/" class="active-pro" style="margin-bottom:30px">
        <md-icon>unarchive</md-icon>
        <p>Wyeksportuj dane do tabeli</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">

  

      <dashboard-content> </dashboard-content>

    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
  components: {
    //TopNavbar,
    DashboardContent,
    //ContentFooter,
    //MobileMenu,
    //FixedPlugin
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg")
    };
  }
};
</script>
