<template>
  <section class="section-learn">
    <div class="page-title">
      <h2>
        <span class="blast" style="opacity: 1;">L</span>
        <span class="blast" style="opacity: 1;">e</span>
        <span class="blast" style="opacity: 1;">a</span>
        <span class="blast" style="opacity: 1;">r</span>
        <span class="blast" style="opacity: 1;">n</span>
      </h2>
      <div class="border"></div>
    </div>

    <SkillsCourses />
    <hr />
    <LearnBooks />
  </section>
</template>

<script>

import SkillsCourses from "./SkillsCourses.vue";
import LearnBooks from "./LearnBooks.vue";

export default {
  name: "Learn",
  components: {
    SkillsCourses,
    LearnBooks
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>

$primary-color: #08fdd8;

.section-learn {
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