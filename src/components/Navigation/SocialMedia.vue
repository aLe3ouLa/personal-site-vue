<template>
  <ul class="social-media">
    <li class="social-media__item">
      <a class="social-media__item--link"  href="https://www.linkedin.com/in/alexandra-barka-57075361/">
        <span class="fab fa-linkedin"></span>
      </a>
    </li>
    <li class="social-media__item">
      <a class="social-media__item--link" href="https://github.com/aLe3ouLa">
        <span class="fab fa-github"></span>
      </a>
    </li>
    <li class="social-media__item">
      <a class="social-media__item--link"  href="https://dribbble.com/aLe3andra">
        <span class="fab fa-dribbble"></span>
      </a>
    </li>
    <li class="social-media__item">
      <a  class="social-media__item--link"  href="https://dev.to/ale3oula">
        <span class="fab fa-dev"></span>
      </a>
    </li>
    <li class="social-media__item">
      <a class="social-media__item--link"  href="https://www.instagram.com/ale3.js/">
        <span class="fab fa-instagram"></span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SocialMedia"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.social-media {
  list-style-type: none;
  margin-bottom: 4rem;

  &__item {
    font-family: FontAwesome;
    color: #8496b0;
    display: inline-block;
    font-size: 1.1rem;

    &--link {
        color: #8496b0;
        text-decoration: none;
    }
  }

  &__item:not(:last-child) {
    margin-right: 1rem;
  }
}


.fa-dev:hover {
  color: #3b5998;
}

.fa-instagram:hover {
  color: #517fa4;
}

.fa-linkedin:hover {
  color: #0077b5;
}

.fa-github:hover {
  color: #bd081c;
}

.fa-dribbble:hover {
  color: #ea4c89;
}
</style>
