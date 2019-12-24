<template>
  <div id="app">
    <NavigationMobile class="navigation-mobile"/>
    <div class="container-app">
      <Navigation class="navigation navigation-desktop"/>
      <router-view class="content"/>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation/Navigation.vue";
import NavigationMobile from "./components/Navigation/NavigationMobile.vue";

export default {
  name: "app",
  components: {
    Navigation,
    NavigationMobile
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

::selection {
  background-color: #05947e;
  color: #eee;
}

.container-app {
  display: flex;
  flex-wrap: wrap;
}

.navigation {
  flex: 0 0 20%;
}

.content {
  flex: 1;
}

#app {
  
  font-family: 'Poppins', "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navigation-mobile {
  display: none;
}


@media only screen and (max-width: 726px) {
  .navigation-mobile {
    display: block;
  }

  .navigation-desktop {
    display: none;
  }
}
</style>
