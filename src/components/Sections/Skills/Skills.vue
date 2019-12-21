<template>
  <section class="skill-section">
    <div class="page-title">
      <h2>Skills</h2>
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
</style>