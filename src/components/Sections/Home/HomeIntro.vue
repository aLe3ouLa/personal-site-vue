<template>
  <div class="header__heading-box--about">
    <div class="header__post--text">
      <h4>Summary</h4>Hi! 👋 I am a Front-end Engineer with knowledge of UX design principles and experience in building software and web applications for more than 3 years.
      I enjoy creating simple, clean and creative user interfaces using the latest web technologies.
      I specialize in JavaScript and have professional experience working with Angular 2+ and Vue.js.
      I graduated with a M.Sc. in Information Systems and HCI from
      <a
        href="https://www.csd.uoc.gr/"
      >University of Crete</a>.
      I'm currently working as a Frontend developer in
      <a href="https://www.yabbu.com/">Yabbu</a>.
      <br />
      <br>
When not working, I'm likely watching Superhero movies in cinema or series on Netflix, re-reading Neil Gaiman books, travelling the world or taking strolls with my camera!
    </div>
    <div class="header_buttons">
      <router-link class="btn btn-seemore" to="/portfolio">Let's see some work!</router-link>
      <a href="./cv.pdf" class="btn btn-cv" target="_blank">One page CV</a>
      <a href="./cv_extended.pdf" class="btn btn-cv" target="_blank">Extended CV</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeIntro"
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

$primary-color: #08fdd8;
.header__post--text {
  width: 95%;
  margin: 0.5rem;
  padding: 1rem;
  font-size: 1.1rem;
  text-align: left;
  text-justify: center;
  border-top: 5px solid $primary-color;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
}

.header__post--text h4{
  font-weight: 600;
}

.btn-seemore {
  color: #333;
  border: 2px solid $primary-color;
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

.header_buttons {
  display: flex;
  justify-content: flex-start;
  margin: 1rem 0.5rem;
}

@media only screen and (max-width: 600px) {
  .header_buttons {
    flex-direction: column;
  }
}
</style>
