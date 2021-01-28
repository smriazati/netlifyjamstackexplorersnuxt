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
    <button @click="showPlanets">Show Planets</button>
    <div v-if="show">
      <LazyPlanetsList />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
