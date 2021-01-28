<template>
  <div>
    <p v-if="$fetchState.pending">Fetching planets....</p>
    <p v-else-if="$fetchState.error">Error while fetching planets</p>
    <ul v-else>
      <li v-for="planet in planets" :key="planet.slug">
        <NuxtLink :to="planet.slug">
          {{ planet.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  // components only can use fetch, can't use async data
  async fetch() {
    this.planets = await fetch("https://api.nuxtjs.dev/planets").then((res) =>
      res.json()
    );
  },
  data() {
    return {
      planets: [],
    };
  },
};
</script>