<template>
  <section class="section-coding">
      <div class="page-title">
        <h2>Frontend skills</h2>
        <div class="border"></div>
      </div>
      <div class="skill-section">
        <p>
        I focus on
        <strong>front-end development</strong> of awesome web and mobile applications.
        I enjoy creating
        <strong>simple</strong>,
        <strong>clean</strong> and
        <strong>creative</strong> user interfaces using the latest web technologies.
        I specialize in JavaScript and have professional experience working with Angular 2+, angular.js and vue.js.
        </p>

        <p>Some skills that I acquired through my academic and professional (until now!) career are:</p>
      
       
        <div class="coding-skills">
          <strong>Coding:</strong>
          <span v-for="(skill, index) in codingSkills" :key="index" style="display: flex; align-items: center;">
            &nbsp;&nbsp;&nbsp;&nbsp;<i v-bind:class="[skill.icon, skill.color]"></i> &nbsp;&nbsp;
            <a v-bind:href="skill.link">{{skill.name}}</a>
          </span>
        </div>
  
      </div>
    </section>
</template>

<script>
export default {
  name: "SkillsCoding",
  data() {
    return {
      codingSkills: [
         {
          name: "Vue.js",
          link: "https://vuejs.org/",
          icon: "fab fa-vuejs",
          color: "vue"
        },
        {
          name: "Angular 2+",
          link: "https://angular.io/",
          icon: "fab fa-angular",
          color: "angular"
        },
        {
          name: "HTML5",
          link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
          icon: "fab fa-html5",
          color: "html5"
        },
        {
          name: "CSS3",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3",
          icon: "fab fa-css3-alt",
          color: "css3"
        },
        {
          name: "AngularJS",
          link: "https://angularjs.org/",
          icon: "fab fa-angular",
          color: "angular"
        },
       
        {
          name: "Bootstrap 4",
          link: "https://getbootstrap.com/",
          icon: "fab fa-bootstrap",
          color: "bootstrap"
        },
        {
          name: "JavaScript (ES6)",
          link: "https://es6.io/",
          icon: "fab fa-js",
          color: "js"
        },
        {
          name: "TypeScript",
          link: "https://www.typescriptlang.org/"
        },
        {
          name: "Node.js",
          link: "https://nodejs.org/en/",
          icon: "fab fa-node-js",
          color: "node"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>

$primary-color: #05947e;
.page-title {
  margin: 1rem 0;
  text-align: left;
  font-size: 30px;
}

.border {
  width: 55px;
  height: 2px;
  border-radius: 20px;
  margin-top: 8px;
}

.coding-skills {
  display: flex;
  align-items: center;
      flex-wrap: wrap;
}

.skill-section {
  text-align: left;
}

a {
  color: $primary-color;
}

.fab {
  font-size: 1.6rem;
}

.html5 {
  color: #f16529;
}
.css3 {
  color: #0e57a7;
}

.angular {
  color: #b52e31;
}

.vue {
  color: #42b883;
}

.bootstrap {
  color: #602c50;
}

.js {
  color: #f0db4f;
}

.node {
  color: #68a063;
}



</style>