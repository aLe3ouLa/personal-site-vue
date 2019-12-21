<template>
  <section class="section-blog">
    <div class="page-title">
      <h2>Blog</h2>
      <div class="border"></div>
    </div>

  </section>
</template>

<script>


export default {
  name: "Blog",
  components: {
  },
  data() {
    return {};
  }
};
</script>

<style scoped>

.section-blog {
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
  margin-top: 8px;
}
</style>