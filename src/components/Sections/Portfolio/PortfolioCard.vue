<template>
  <div class="card">
    <div class="card-image">
      <div class="gatsby-image-wrapper" style="position:relative;overflow:hidden">
        <div style="width:100%;padding-bottom:55.34722222222222%"></div>
        <img class="card-image--img" v-bind:src="portfolio.image" />
      </div>
    </div>
    <div class="card-details">
      <div>
        <h2 class="portfolio__title">{{portfolio.title}}</h2> 
        <div class="portfolio__subtitle">{{portfolio.position}}</div>
        <div class="portfolio__subtitle">
          <span v-for="(technology, index) in portfolio.technologies" v-bind:key="index">
            <i v-bind:class="technology.icon"></i>
            ({{technology.name}})
          </span>
        </div>
      </div>
      <div>
        <div>
          <div class="job__subtitle" style="font-size: 1rem;">{{portfolio.description}}</div>
          <span v-for="(l, index) in portfolio.links" :key="index">
          <a v-bind:href="l.link" class="btn btn-black" target="_blank">{{l.name}}</a>
        </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioCard",
  props: {
    portfolio: {
      title: String,
      image: String,
      position: String,
      description: String,
      links: {
        name: String,
        link: String
      },
      technologies: {
        name: String,
        icon: String
      }
    }
  }
};
</script>

<style scoped>
.card {
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 0;
  margin-bottom: 0.5rem;
  /* padding: 0 1rem; */
}

.card-image {
  position: relative;
  max-width: 300px;
  overflow: hidden;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-radius: 0.5rem;
  border: 0 solid #e2e8f0;
}

.card-image--img {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  /* opacity: 0; */
  transition-delay: 500ms;
}

.card-details {
  padding: 1rem;
}

.portfolio__title {
  text-align: left;
  margin-bottom: 0.25rem;
  font-weight: 600;
  font-size: 1.1rem;
}

.portfolio__subtitle {
  color: #718096;
  text-align: left;
  font-size: 0.75rem;
  margin-bottom: 1rem;
}

.job__subtitle {
  text-align: left;
}

.btn {
     padding: .1rem .5rem;
     font-weight: bold;
     font-size: 1.1rem;
     border-radius: 4px;
     margin-right: .2rem;
  }

  .btn-black {
    background-color: #fff;
    border: 2px solid #f39c12;
    color: #f39c12;
  }

  .btn-black:hover {
    background-color: #f39c12;
    color: #fff;
  }
</style>
