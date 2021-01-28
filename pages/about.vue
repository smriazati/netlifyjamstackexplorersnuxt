<template>
  <div class="about-container container">
    <h1>About</h1>
    <p>
      I made this site to follow this tut:
      <a
        href="https://explorers.netlify.com/learn/get-started-with-nuxt/"
        target="_blank"
        >Netlify Jamstack Explorers course - Nuxt</a
      >
    </p>
    <div v-if="!show">
      <button @click="showPlanets">Show Planets</button>
    </div>
    <div v-if="show">
      <LazyPlanetsList />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showPlanets() {
      this.show = true;
    },
  },
};
</script>

<style>
</style>
