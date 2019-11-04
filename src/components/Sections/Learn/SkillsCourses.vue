<template>
  <div class="skills">
    <section>
      <div class="page-title">
        <h2>How I learn?</h2>
        <div class="border"></div>
      </div>

      <div class="skill-section">
        One of main traits of most developers are continuously leveling up their skills. Online courses, great articles and guides are only some ways.
        <br>There are some of my favorite courses:
        <br>
        <br>
        <ul class="container-fluid">
          <li v-for="(skill, index) in favoriteCourses" :key="index">
            <a v-bind:href="skill.link">{{skill.name}} - <strong>By</strong> {{skill.author}} </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "SkillsCourses",
  data() {
    return {
      favoriteCourses: [
        {
          name: "Angular 8 (formerly Angular 2) - The Complete Guide",
          author: "Maximilian Schwarzmüller",
          link: "https://www.udemy.com/the-complete-guide-to-angular-2/"
        },
        {
          name: "Vue JS Essentials with Vuex and Vue Router",
          author: "Stephen Grider",
          link: "https://www.udemy.com/vue-js-course/"
        },
        {
          name: "The Complete 2019 Web Development Bootcamp",
          author: "Angela Yu",
          link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
        },
        {
          name: "The Complete Node.js Developer Course (3rd Edition)",
          author: " Andrew Mead, Rob Percival",
          link: "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/"
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
  background: #f39c12;
  border-radius: 20px;
  margin-top: 8px;
}

.skill-section {
  text-align: left;
}

a {
  color:#f39c12;
}
</style>