<template>
  <div class="container">
    <h1>About</h1>
    <p>
      <a
        href="https://explorers.netlify.com/learn/get-started-with-nuxt/"
        target="_blank"
        >Source: Jamstack explorer course</a
      >
    </p>
    <div v-if="!show">
      <button @click="showPlanets">Show Planets</button>
    </div>
    <div v-else>
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
