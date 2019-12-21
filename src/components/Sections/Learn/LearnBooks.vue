<template>
    <section class="skills">
      <div class="page-title">
        <h4>Books &amp; articles</h4>
      </div>

      <div class="skill-section">
        <p>Favorite tech books:</p>
        <ul class="container-fluid">
          <li v-for="(skill, index) in favoriteCourses" :key="index">
            <a v-bind:href="skill.link">{{skill.name}} - <strong>By</strong> {{skill.author}} </a>
          </li>
        </ul>
      </div>
    </section>
</template>

<script>

export default {
  name: "SkillsCourses",
  data() {
    return {
      favoriteCourses: [
        {
          name: "HTML & CSS: Design and Build Web Sites",
          author: "Jon Duckett",
          link: "http://www.htmlandcssbook.com/"
        },
        {
          name: "Clean Code: A Handbook of Agile Software Craftsmanship",
          author: "Robert C. Martin",
          link: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"
        }
      ]
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
  background: #08fdd8;
  border-radius: 20px;
  margin-top: 8px;
}

.skill-section {
  text-align: left;
}

a {
  color:#05947e;
}
</style>