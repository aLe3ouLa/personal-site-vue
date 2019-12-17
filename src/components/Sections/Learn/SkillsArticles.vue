<template>
    <section class="skills">
      <div class="page-title">
        <h4>Articles I wrote</h4>
        <div class="border"></div>
      </div>

      <div class="skill-section">
        <p>They say that you truly understand something if you can teach it. So, in my free time I write articles to explain basic concepts about HTML, CSS or Javascript!</p>
        <div class="coding-skills">
          <div
            v-for="(article, index) in articles"
            :key="index"
          >
            {{article.name}} 
            <span v-for="a in article.l" style="margin-right: 1rem;">
              <a v-bind:href="[a.link]">
                <i v-bind:class="[a.icon]"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "SkillsArticles",
  data() {
    return {
      articles: [
        {
          name: "Flexbox 101: Terminology & Basics",
          l: [
            {
              icon: "fab fa-dev",
              link:
                "https://dev.to/ale3oula/flexbox-101-terminology-basics-18hb"
            },
          ]
        },{
          name: "Pass By Value in JavaScript",
          l: [
            {
              icon: "fab fa-dev",
              link:
                "https://dev.to/ale3oula/pass-by-value-in-javascript-5gch"
            },
          ]
        },
        {
          name: "The Quite Nice and Fairly Accurate Introduction to JavaScript Primitive Data Types",
          l: [
            {
              icon: "fab fa-dev",
              link:
                "https://dev.to/ale3oula/the-quite-nice-and-fairly-accurate-introduction-to-javascript-primitive-data-types-e99"
            },
          ]
        },
        {
          name: "The Quite Nice and Fairly Accurate Intro to JavaScript Objects (pt. 2)",
          l: [
            {
              icon: "fab fa-dev",
              link:
                "https://dev.to/ale3oula/the-quite-nice-and-fairly-accurate-intro-to-javascript-objects-pt-2-1aaf"
            },
            { icon: "fab fa-medium",
            link: "https://levelup.gitconnected.com/the-quite-nice-and-fairly-accurate-intro-to-javascript-objects-bb2e2b718dc3"}
          ]
        },
        {
          name: "The horror-scope - Global, Local and Block scope in JS",
          l: [
            {
              icon: "fab fa-dev",
              link:
                "https://dev.to/ale3oula/the-hor-r-o-r-scope-global-local-and-block-scope-in-js-37a1"
            },
          ]
        },
        {
          name: "The Array Iterators Cheatsheet (JavaScript)",
          l: [
            {
              icon: "fab fa-dev",
              link:
                "https://dev.to/ale3oula/the-array-iterators-cheatsheet-javascript-2h8e"
            },
          ]
        },
        
        
      ]
    };
  }
};
</script>

<style scoped>
.page-title {
  margin: 1rem 0;
  text-align: left;
  font-size: 30px;
}

.border {
  width: 55px;
  height: 8px;
  background: #f39c12;
  border-radius: 20px;
  margin-top: 8px;
}

.coding-skills {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
}

.skill-section {
  text-align: left;
}

a {
  color: #602c50;
}

.fab {
  font-size: 1.6rem;
}


</style>