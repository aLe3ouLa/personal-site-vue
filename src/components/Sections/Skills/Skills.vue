<template>
  <section class="skill-section">
    <div class="page-title">
      <h2>
          <span class="blast" style="opacity: 1;">S</span>
        <span class="blast" style="opacity: 1;">k</span>
        <span class="blast" style="opacity: 1;">i</span>
        <span class="blast" style="opacity: 1;">l</span>
        <span class="blast" style="opacity: 1;">l</span>
        <span class="blast" style="opacity: 1;">s</span>
      </h2>
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
          <li>Work with old technologies</li>
          <li>Develop sites that look'n'feel cheap</li>
          <li>Dress up before coding</li>
          <li>Commute for 45min+ before coding</li>
        </ul>
      </div>
    </div>
    <SkillsCoding />
    <hr />
    <SkillsTools />
    <hr />
  </section>
</template>

<script>
import SkillsCoding from "./SkillsCoding.vue";
import SkillsTools from "./SkillsTools.vue";

export default {
  name: "Skills",
  components: {
    SkillsCoding,
    SkillsTools
  }
};
</script>

<style lang="scss" scoped>

$primary-color: #08fdd8;
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

.skill-section {
  padding: 2rem;
}

a {
  color: #05947e;
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
  font-size: 0.9rem;
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