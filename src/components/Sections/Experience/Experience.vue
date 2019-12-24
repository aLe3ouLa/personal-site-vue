<template>
      <section class="section-experience">
        <div class="page-title">
        <h2>
        <span class="blast" style="opacity: 1;">W</span>
        <span class="blast" style="opacity: 1;">o</span>
        <span class="blast" style="opacity: 1;">r</span>
        <span class="blast" style="opacity: 1;">k</span>
        <span class="blast" style="opacity: 1;">&nbsp;</span>
        <span class="blast" style="opacity: 1;">E</span>
        <span class="blast" style="opacity: 1;">x</span>
        <span class="blast" style="opacity: 1;">p</span>
        <span class="blast" style="opacity: 1;">e</span>
        <span class="blast" style="opacity: 1;">r</span>
        <span class="blast" style="opacity: 1;">i</span>
        <span class="blast" style="opacity: 1;">e</span>
        <span class="blast" style="opacity: 1;">n</span>
        <span class="blast" style="opacity: 1;">c</span>
        <span class="blast" style="opacity: 1;">e</span>
      </h2>
        <div class="border"></div>
      </div>
        <template v-for="(work, index) in works">
        <ExperienceCard  :work="work" :key="index" />
      </template>
          
      </section>
</template>

<script>

import ExperienceCard from './ExperienceCard.vue'

export default {
  name: "Experience",
  components: {
    ExperienceCard
  },
  data() {
    return {
      works: [
        {
          title: "Yabbu", 
          position: "Frontend Developer - Amsterdam, Netherlands", 
          from:  new Date(2019, 6, 1), 
          to: "now",
          description: "Yabbu is a startup application which acts as a remote meeting management tool that improves results by cancelling the meeting; Maintaining the angular.js part, while migrating to vue.js; Translating pixel-perfect UX designs into code (Vue.js); Designing and organizing the development process, into small steps , including an estimate of how much time it will take from developers to deliver it.", 
          projects: [],
          technologies: "REST api, axios, HTML5, CSS3, SASS, angular.js, vue.js, git, gitkraken"
        }, 

        {
          title: "UBITECH Ltd", 
          position: "Frontend Engineer - Athens, GR", 
          from:  new Date(2018, 6, 6), 
          to: new Date(2019, 6, 5),
          description: "Worked as a front-end engineer with a working knowledge of UX design principles. My role was to write front-end components in various languages (depending on the project and clients preferences) as well as design user interfaces and assets for the company's projects. Delivered clean code and pixel-perfect results.", 
          projects: [
            {
            name: "", description: " Implement front-end component for several projects in the company, using vue.js, angular.js, spring boot, HTML5, CSS3, Javascript"
            },
            {
            name: "", description: "Design user interfaces for best user experience"
            },
            {
            name: "DANA", description: "Using agile methodologies to deliver front-end components with Angular 7 best practices, including a timeline, various tables and details depicting huge amount of data for IoT devices. External libraries used were: moment, devextreme "
            },
            {
            name: "ChildRescue", description: "Design with the best UI/UX practises"
            }
          ],
          technologies: "Angular 2+, Vue.js, JavaScript, TypeScript, Thymeleaf, HTML5, CSS3"
        }, 

      {
          title: "Foundation for Research and Technology - (ICS - FORTH)", 
          position: "R&D - Frontend engineer - Heraklion, GR", 
          from: new Date(2015, 6, 6), 
          to: new Date(2018, 6, 5),
          description: "Research and Developer engineer in Ambient Intelligent environments with a focus on front-end development on web, mobile and desktop (non-web based) applications. Learned to develop front-end with pixel-perfect results and user-centred designed applications. Outcomes from my work in FORTH are:",
          projects: [{
            name: "UInify.", description: " Developed with MEAN (Mongo.DB, Express.js, Angular 6, Node.js) stack to build a full stack application which acted as a studio for composing flexible web applications in real-time and aggregate all the individual UIs of an intelligent environment by introducing new rich user interface compositions."
          },
          {
            name: "Beantable.", description: "Co-develop an augmented interactive table with multiple games for the Heraklion Public Library of Crete. Used C# and WPF to implement a launcher for the application and re-design various games (e.g. puzzle, classic memory games)."
          },
          {
            name: "Arkadi Monastery.", description: "Re-design and develop a mobile application for the Arkadi Museum in Rethimni. Used Actionscript and Adobe Flash Builder to implement a cross-platform application for both Android and iOS."
          },
          {
            name: "Info kiosk.", description: "Co-developed an info kiosk for the Archeological Museum of Crete, which provided information for the Minoan Culture. Developed in C# and WPF the Architecture section and some Utilities."
          }
          ],
          technologies: "Angular 2+, MEAN stack, WPF, C#, Actionscript, Typescript, Javacript, Node.js, HTML5, CSS3"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>

$primary-color: #08fdd8;

.section-experience {
  padding: 2rem;
}
.page-title {
  margin: 1rem 0;
  text-align: left;
  font-size: 30px;
  cursor: pointer;
}

.border {
  width: 55px;
  height: 2px;
  border-radius: 20px;
  margin-top: 8px;
}

.blast {
    opacity: 0;
    display: inline-block;
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
    animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
}

.blast:hover {
    color: $primary-color;
    animation-name: rubberBand;
}

@keyframes rubberBand {
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

.rubberBand {
  -webkit-animation-name: rubberBand;
  animation-name: rubberBand;
}
</style>