<template>
  <section class="section-portfolio">
    <div class="page-title">
      <h2>Portfolio</h2>
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
import PortfolioCard from "./PortfolioCard.vue";

export default {
  name: "Portfolio",
  components: {
    PortfolioCard
  },
  data() {
    return {
      portfolios: [
        {
          title: "Autosuggest  (2019)",
          image: require("../../../assets/autosuggest.png"),
          position: "Side Project",
          description: "Technical Assignment that acts as suggestion system",
          links: [
            {
              name: "Codepen",
              link: "https://codepen.io/ale3oula-the-styleful/pen/LYYXLzm"
            }
          ],
          technologies: [
            {
              name: "Vue.js",
              icon: "fab fa-vuejs"
            }
          ]
        },
        {
          title: "Video Browser (2019)",
          image: require("../../../assets/video-browser.png"),
          position: "Side Project",
          description: "Development of a youtube-like application",
          links: [
            {
              name: "Github",
              link: "https://github.com/aLe3ouLa/video-browser"
            }
          ],
          technologies: [
            {
              name: "Vue.js",
              icon: "fab fa-vuejs"
            }
          ]
        },
        {
          title: "Yabbu (2019)",
          image: require("../../../assets/yabbu.png"),
          position: "Tjelp/Yabbu",
          description:
            "Maintain the site (angular.js) and write new features in vue.js",
          links: [
            {
              name: "Website",
              link: "https://app.yabbu.com"
            }
          ],
          technologies: [
            {
              name: "Vue.js",
              icon: "fab fa-vuejs"
            },
            {
              name: "Angular.js",
              icon: "fab fa-angular"
            }
          ]
        },
        {
          title: "CV (2019)",
          image: require("../../../assets/cv.png"),
          position: "Side Project",
          description: "Design and Implement the current site in vue.js",
          links: [
            {
              name: "Github",
              link: "https://github.com/aLe3ouLa/personal-site-vue"
            }
          ],
          technologies: [
            {
              name: "Vue.js",
              icon: "fab fa-vuejs"
            }
          ]
        },
        {
          title: "Ticker",
          image: require("../../../assets/ticker.png"),
          position: "Side Project",
          description: "Development of a jira-like application",
          links: [
            {
              name: "Github",
              link: "https://github.com/aLe3ouLa/project-tickets"
            }
          ],
          technologies: [
            {
              name: "Angular",
              icon: "fab fa-angular"
            }
          ]
        },
        {
          title: "AEGIS (2019)",
          image: require("../../../assets/childrescue.png"),
          position: "UBITECH Ltd.",
          description:
            "Design & Develop Landing page, some features in angular.js",
          links: [
            {
              name: "Site",
              link: "https://www.aegis-bigdata.eu/partners/"
            }
          ],
          technologies: [
            {
              name: "Figma",
              icon: "fab fa-figma"
            },
            {
              name: "Angular",
              icon: "fab fa-angular"
            }
          ]
        },
        {
          title: "Weather App",
          image: require("../../../assets/weather.png"),
          position: "Side Project",
          description: "Weather application that the colors adjust the weather",
          links: [
            {
              name: "Github",
              link: "https://github.com/aLe3ouLa/weather-app"
            }
          ],
          technologies: [
            {
              name: "HTML5",
              icon: "fab fa-html5"
            },
            {
              name: "CSS3",
              icon: "fab fa-css3"
            },
            {
              name: "JS",
              icon: "fab fa-js"
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
        },
        {
          title: "Arkadi Monastery(2016)",
          image: require("../../../assets/arkadi.png"),
          position: "ICS-FORTH",
          description: "Redesign and co-develop features in Actionscript",
          links: [
            {
              name: "Play Store",
              link:
                "https://play.google.com/store/apps/details?id=air.gr.forth.ami.arkadi.mobile"
            }
          ],
          technologies: [
            {
              name: "Actionscript",
              icon: "fab fa-adobe"
            }
          ]
        },
        {
          title: "Vikelaia bean table",
          image: require("../../../assets/vikailea.png"),
          position: "ICS-FORTH",
          description: "Redesign and co-develop an interactive table in WPF",
          links: [
            {
              name: "Installation",
              link:
                "http://ami.ics.forth.gr/installation/vikelaia-municipal-library/"
            }
          ],
          technologies: [
            {
              name: "WPF, C#",
              icon: "fab fa-cuttlefish"
            }
          ]
        },
        {
          title: "Info Kiosk",
          image: require("../../../assets/infokiosk.png"),
          position: "ICS-FORTH",
          description: "Co-develop a pixel-perfect information kiosk in WPF",
          links: [
            {
              name: "Book Chapter",
              link:
                "https://www.researchgate.net/publication/325598092_Digital_Heritage_Technology_at_the_Archaeological_Museum_of_Heraklion"
            },
            {
              name: "Installation",
              link:
                "http://ami.ics.forth.gr/installation/heraklion-archaeological-museum/"
            }
          ],
          technologies: [
            {
              name: "WPF, C#",
              icon: "fab fa-cuttlefish"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.section-portfolio {
  padding: 2rem;
}

.page-title {
  margin: 1rem 0;
  text-align: left;
  font-size: 30px;
}

.portfolio-cards div, .port-cards {
  margin: 1rem;
}

.border {
  width: 55px;
  height: 2px;
  border-radius: 20px;
  margin-top: 6px;
}
</style>