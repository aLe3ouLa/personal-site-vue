<template>
  <section class="section-contact">
    <div class="page-title">
      <h2>
         <span class="blast" style="opacity: 1;">C</span>
        <span class="blast" style="opacity: 1;">o</span>
        <span class="blast" style="opacity: 1;">n</span>
        <span class="blast" style="opacity: 1;">t</span>
        <span class="blast" style="opacity: 1;">a</span>
        <span class="blast" style="opacity: 1;">c</span>
        <span class="blast" style="opacity: 1;">t</span>
      </h2>
      <div class="border"></div>
    </div>
    <h3>Want to get in touch?</h3>
    <p>Find me on social media:</p>
    <SocialMedia></SocialMedia>
    <p>
      or send me an e-mail:
      <a href="barka.alexandra2@gmail.com">barka.alexandra2@gmail.com</a>
    </p>

    <div class="header_buttons">
      <router-link class="btn btn-seemore" to="/portfolio">Let's see some work!</router-link>
      <a href="./cv.pdf" class="btn btn-cv" target="_blank">One page CV</a>
      <a href="./cv_extended.pdf" class="btn btn-cv" target="_blank">Extended CV</a>
    </div>
  </section>
</template>

<script>
import SocialMedia from "../Navigation/SocialMedia";
export default {
  name: "Contact",
  components: {
    SocialMedia
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>

$primary-color: #08fdd8;

.section-contact {
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
  margin-top: 6px;
}

.header_buttons {
  display: flex;
  justify-content: center;
  margin: 1rem 0.5rem;
}



.btn-seemore {
  background-color: #fff;
  border: 2px solid $primary-color;
  color: #333;
;
}

.btn-cv {
  background-color: $primary-color;
  border: 2px solid $primary-color;
  color: #333;
}

.btn-portfolio:hover {
  background-color: $primary-color;
  color: #333;
}

.btn-seemore:hover {
  background-color: $primary-color;
  color: #333;
}

.btn-cv:hover {
  background-color: #fff;
  color: #333;
}

a {
  color: $primary-color;
  font-weight: bold;
}

.btn {
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 2px;
  margin-right: 0.2rem;
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