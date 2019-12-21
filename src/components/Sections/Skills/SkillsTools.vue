<template>
    <section>
      <div class="page-title">
        <h2>What I Use?</h2>
        <div class="border"></div>
      </div>

      <div class="skill-section">
        A list of all the tools I use:
        <br>
        <br>
        <strong>Coding tools:</strong>
        <span v-for="(skill, idc) in codeTools" :key="idc">
          &nbsp;&nbsp;&bull;&nbsp;
          <a v-bind:href="skill.link">{{skill.name}}</a>
        </span>
        <br>
        <strong>Design tools:</strong>
        <span v-for="(skill, idd)  in designTools" :key="idd">
          &nbsp;&nbsp;&bull;&nbsp;
          <a v-bind:href="skill.link">{{skill.name}}</a>
        </span>
        <br>
        <strong>OS:</strong>
        <span v-for="(skill, idx) in OS" :key="idx">
          &nbsp;&nbsp;&bull;&nbsp;
          <a v-bind:href="skill.link">{{skill.name}}</a>
        </span>
        <br>
      </div>
    </section>
</template>

<script>

export default {
  name: "Skills",
  data() {
    return {
      codeTools: [
        { name: "Visual Studio Code", link: "https://code.visualstudio.com/" },
        { name: "Atom", link: "https://atom.io/" },
        { name: "Intellij", link: "https://www.jetbrains.com/idea/" },
        { name: "Notepad++", link: "https://notepad-plus-plus.org/" },
        { name: "GitKraken", link: "https://gitkraken.com" }
      ],
      designTools: [
        { name: "Figma", link: "https://www.figma.com/" },
        { name: "Adobe Suite", link: "https://www.adobe.com" }
      ],
      OS: [{ name: "Windows" }, { name: "macOS" }],
    };
  }
};
</script>

<style lang="scss" scoped>

$primary-color: #05947e;
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

.skill-section {
  text-align: left;
}

a {
  color:$primary-color;
}
</style>