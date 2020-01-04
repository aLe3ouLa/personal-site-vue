<template>
  <div class="navigation">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.0/css/all.css" />
    <nav id="sidebar" class="sidebar">
      <div class="sidebar__header">
        <router-link class="nav-link" to="/">
          <img src="../../assets/avatar.png" alt />
        </router-link>
        <h4>Alexandra Barka</h4>
        <span class="sidebar__header--tag">Frontend Developer, UI/UX Designer</span>
      </div>

      <div class="navigation__list">
        <ul class="navigation__list--nav">
          <li class="navigation__list--item">
            <router-link class="navigation__list--link" to="/" exact>
              <i class="navigation__list--icon fa fa-user"></i>About
            </router-link>
          </li>
          <li class="navigation__list--item">
            <router-link class="navigation__list--link" to="/portfolio">
              <i class="navigation__list--icon fa fa-cubes"></i>Code
            </router-link>
          </li>
          <li class="navigation__list--item">
            <router-link class="navigation__list--link" to="/skills">
              <i class="navigation__list--icon fa fa-object-group"></i>Skills
            </router-link>
          </li>
          <li class="navigation__list--item">
            <router-link class="navigation__list--link" to="/experience">
              <i class="navigation__list--icon fa fa-briefcase"></i>Work
            </router-link>
          </li>
          <li class="navigation__list--item">
            <router-link class="navigation__list--link" to="/design">
              <i class="navigation__list--icon fa fa-paint-brush"></i>Design
            </router-link>
          </li>
          <li class="navigation__list--item">
            <router-link class="navigation__list--link" to="/learn">
              <i class="navigation__list--icon fa fa-book"></i>Learn
            </router-link>
          </li>
          <li class="navigation__list--item">
            <router-link class="navigation__list--link" to="/contact">
              <i class="navigation__list--icon fa fa-envelope"></i>Contact
            </router-link>
          </li>
        </ul>
      </div>
      
      <SocialMedia></SocialMedia>
    </nav>
  </div>
</template>

<script>

import SocialMedia from './SocialMedia.vue';

export default {
  name: "Navigation",
  components: {
    SocialMedia: SocialMedia
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

$primary-color: #08fdd8;
$navigation-color: #202026;

.sidebar {
  min-height: 100vh;
  min-width: 250px;
  background-color: $navigation-color;
  color: $primary-color;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &__header {
    &--tag {
      color: #fff;
      font-size: .6rem;
      text-transform: uppercase;
      font-weight: 700;
    }
  }
}

.navigation__list {
  // display: flex; 
  // flex-direction: column; 
  // justify-content: space-between;
  margin-bottom: auto;
  margin-top: 2rem;
  &--nav {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  &--item {
    display: flex;
    align-items: center;
    padding: 0.3rem 0rem;
    color: #fff;
    cursor: pointer;
    width: 100%;
  }

  &--item:hover {
    .navigation__list--link {
      color: $primary-color;
      text-decoration: none;
    }

    .navigation__list--icon {
      color: $primary-color;
    }
  }

  &--icon {
    margin-right: 1rem;
    min-width: 1.5rem;
  }

  &--link {
    color: #fff;
  }
}


.router-link-active {
  font-weight: bold;
  color: $primary-color;
}

</style>
