<template>
  <section class="section-design">
    <div class="page-title">
      <h2>
        <span class="blast" style="opacity: 1;">D</span>
        <span class="blast" style="opacity: 1;">e</span>
        <span class="blast" style="opacity: 1;">s</span>
        <span class="blast" style="opacity: 1;">i</span>
        <span class="blast" style="opacity: 1;">g</span>
        <span class="blast" style="opacity: 1;">n</span>
      </h2>
      <div class="border"></div>
    </div>

    <div class="row">
      <template v-for="(portfolio, index) in portfolios">
        <PortfolioCard class="port-cards" :portfolio="portfolio" :key="index" />
      </template>
    </div>
  </section>
</template>

<script>
import PortfolioCard from "../../Sections/Portfolio/PortfolioCard";

export default {
  name: "Design",
  components: {
    PortfolioCard
  },
  data() {
    return {
      portfolios: [
        {
          title: "Kansallisarkisto (2019)",
          image: require("../../../assets/kans.png"),
          position: "Freelance",
          description: "Design the Search Results & details",
          links: [
            {
              name: "Site",
              link:
                "https://transkribus.eu/r/kansallisarkisto/"
            }
          ],
          technologies: [
            {
              name: "AdobeXD",
              icon: "fab  fa-adobe"
            }
          ]
        },
        {
          title: "MovieRama | Header (2019)",
          image: require("../../../assets/movieRama.png"),
          position: "Side Project",
          description: "Design header for movie ticket landing page (concept)",
          links: [
            {
              name: "Dribbble",
              link:
                "https://dribbble.com/shots/9130365-MovieRama-Movie-Tickets-Landing-Page"
            },
            {
              name: "Instagram",
              link: "https://www.instagram.com/p/B6VejvKnC1T/"
            }
          ],
          technologies: [
            {
              name: "AdobeXD",
              icon: "fab  fa-adobe"
            }
          ]
        },
        {
          title: "BrewIsle | Header (2019)",
          image: require("../../../assets/brew.png"),
          position: "Side Project",
          description: "Design header for coffee shop landing page (concept)",
          links: [
            {
              name: "Dribbble",
              link:
                "https://dribbble.com/shots/9112779-Brew-Isle-Landing-page-concept"
            },
            {
              name: "Instagram",
              link: "https://www.instagram.com/p/B6S8taoH3hF/"
            }
          ],
          technologies: [
            {
              name: "AdobeXD",
              icon: "fab  fa-adobe"
            }
          ]
        },
        {
          title: "ChildRescue (2019)",
          image: require("../../../assets/childrescue.png"),
          position: "UBITECH Ltd.",
          description: "Design high fidelity functional mockups",
          links: [
            {
              name: "Demonstrator",
              link:
                "https://www.childrescue.eu/wp-content/uploads/2019/01/ChildRescue_D3.2-ChildRescue-Platform-and-Mobile-App-Early-Prototype_v1.0.pdf"
            }
          ],
          technologies: [
            {
              name: "Figma",
              icon: "fab fa-figma"
            }
          ]
        },
        {
          title: "UINIFY (2018)",
          image: require("../../../assets/01_Dashboard.png"),
          position: "Master Thesis / ICS-FORTH",
          description:
            "Design and develop UInify, a full stack (MEAN) platform",
          links: [
            {
              name: "Presentation",
              link: "./Presentation.pdf"
            },
            {
              name: "Thesis",
              link: "./uinify.pdf"
            }
          ],
          technologies: [
            {
              name: "Angular",
              icon: "fab fa-angular"
            },
            {
              name: "Node.js",
              icon: "fab  fa-node-js"
            },
            {
              name: "AdobeXD",
              icon: "fab  fa-adobe"
            }
          ]
        },
        {
          title: "Smart Home Controller (2017)",
          image: require("../../../assets/smarthome.png"),
          position: "ICS-FORTH",
          description: "Design high fidelity functional mockups",
          links: [
            {
              name: "Dribble",
              link:
                "https://dribbble.com/shots/5927180-Smart-Home-Controller-Home-Page"
            },
            {
              name: "Poster",
              link:
                "https://womencourage.acm.org/wp-content/uploads/2017/07/womENcourage_2017_paper_23.pdf?189db0"
            }
          ],
          technologies: [
            {
              name: "AdobeXD",
              icon: "fab fa-adobe"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>

$primary-color: #08fdd8;
.section-design {
  padding: 2rem;
}

.section-design div, .port-cards {
  margin: 1rem;
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