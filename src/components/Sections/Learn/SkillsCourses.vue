<template>
    <section class="skills">
      <div class="page-title">
        <h4>How I learn?</h4>
        <div class="border"></div>
      </div>

      <div class="skill-section">
        <p>One of main traits of most developers are continuously leveling up their skills. Online courses, great articles and guides are only some ways.</p>
        <p>There are some of my favorite courses that i've been certified with:</p>
        <ul class="container-fluid">
          <li v-for="(skill, index) in favoriteCourses" v-bind:key="index">
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
          name: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
          author: "Jonas Schmedtmann",
          link: "https://www.udemy.com/course/advanced-css-and-sass/"
        },
        {
          name: "The Complete 2019 Web Development Bootcamp",
          author: "Angela Yu",
          link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
        },
        {
          name: "Angular 8 (formerly Angular 2) - The Complete Guide",
          author: "Maximilian Schwarzmüller",
          link: "https://www.udemy.com/the-complete-guide-to-angular-2/"
        },
        {
          name: "Angular & NodeJS - The MEAN Stack Guide",
          author: "Maximilian Schwarzmüller",
          link: "https://www.udemy.com/course/angular-2-and-nodejs-the-practical-guide/"
        },
        {
          name: "Vue JS Essentials with Vuex and Vue Router",
          author: "Stephen Grider",
          link: "https://www.udemy.com/vue-js-course/"
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