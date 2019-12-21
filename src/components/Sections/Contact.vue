<template>
  <section class="section-contact">
    <div class="page-title">
      <h2>Contact</h2>
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

<style scoped>

.section-contact {
  padding: 2rem;
}

.page-title {
  margin: 1rem 0;
  text-align: left;
  font-size: 30px;
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
  border: 2px solid #08fdd8;
  color: #333;
;
}

.btn-cv {
  background-color: #08fdd8;
  border: 2px solid #08fdd8;
  color: #333;
}

.btn-portfolio:hover {
  background-color: #08fdd8;
  color: #333;
}

.btn-seemore:hover {
  background-color: #08fdd8;
  color: #333;
}

.btn-cv:hover {
  background-color: #fff;
  color: #333;
}

a {
  color: #08fdd8;
  font-weight: bold;
}

.btn {
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 2px;
  margin-right: 0.2rem;
}

</style>