<template>
    <section class="learn">
     <div class="page-title">
        <h2>Learn</h2>
        <div class="border"></div>
      </div>

      <SkillsCourses />
    <hr>
    <SkillsArticles />
          
    </section>
</template>

<script>

import SkillsArticles from "./SkillsArticles.vue";
import SkillsCourses from "./SkillsCourses.vue";

export default {
  name: "Learn",
  components: {
    SkillsArticles,
    SkillsCourses
  },
  data() {
    return {
     
    };
  }
};
</script>

<style scoped>
.page-title {
  margin: 1rem 0;
  text-align: left;
  font-size: 30px;
}

.border {
  width: 55px;
  height: 8px;
  background: #f39c12;
  border-radius: 20px;
  margin-top: 8px;
}
</style>