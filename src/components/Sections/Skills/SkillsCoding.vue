<template>
  <div class="skills">
    <section>
      <div class="page-title">
        <h2>Frontend skills</h2>
        <div class="border"></div>
      </div>

              <div class="info">
      <div class="checklist">
        <h3>What I like to do 😊</h3>
        <ul class="likes">
          <li>Work with creative developers</li>
          <li>Work with creative designers</li>
          <li>Transform awesome ideas to applications</li>
          <li>Learn more about technology / programming / JS ❤️</li>
        </ul>
      </div>
      <div class="checklist">
        <h3>What I can't help you with 😔</h3>
        <ul class="dislikes">
          <li>Work with old technologies (e.g., jquery)</li>
          <li>Develop sites that look'n'feel cheap</li>
          <li>Dress up before coding</li>
          <li>Commute for 45min+ before coding</li>
        </ul>
      </div>  
    </div> 

  <hr>
      <div class="skill-section">
        I focus on
        <strong>front-end development</strong> of awesome web and mobile applications.
        I enjoy creating
        <strong>simple</strong>,
        <strong>clean</strong> and
        <strong>creative</strong> user interfaces using the latest web technologies.
        I specialize in JavaScript and have professional experience working with Angular 2+, angular.js and vue.js.
        <br>Some skills that I acquired through my academic and professional (until now!) career are:
        <br>
        <br>
        
        <div class="coding-skills">
          <strong>Coding:</strong>
          <span v-for="(skill, index) in codingSkills" :key="index" style="display: flex; align-items: center;">
            &nbsp;&nbsp;&nbsp;&nbsp;<i v-bind:class="[skill.icon, skill.color]"></i> &nbsp;&nbsp;
            <a v-bind:href="skill.link">{{skill.name}}</a>
          </span>
        </div>
  
      </div>
    </section>
  </div>
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

.coding-skills {
  display: flex;
  align-items: center;
      flex-wrap: wrap;
}

.skill-section {
  text-align: left;
}

a {
  color: #f39c12;
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


.info {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
}

.checklist h3 {
  font-size: 1.2rem;
  text-align: left;
}

.checklist ul {
  text-align: left;
}

.checklist ul li {
  font-size: .9rem;
}
</style>