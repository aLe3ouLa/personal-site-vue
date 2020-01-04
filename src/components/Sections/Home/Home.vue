<template>
  <section class="home">
    <HomeCard/>
    <HomeIntro/>
  </section>
</template>
<script>
import HomeCard from "./HomeCard";
import HomeIntro from "./HomeIntro";

export default {
  name: "Home",
  components: {
    HomeCard,
    HomeIntro
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>

</style>
