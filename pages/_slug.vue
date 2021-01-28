<template>
  <div class="container page-container">
    <h1 class="title">{{ planet.title }}</h1>
    <div class="image">
      <img :src="planet.image" :alt="planet.title" />
    </div>
    <div class="text">
      <p v-if="planet.description">{{ planet.description }}</p>
      <p v-if="planet.radius">
        {{ planet.title }} has a radius of {{ planet.radius }}
      </p>
      <p v-if="planet.distanceFromSun">
        {{ planet.title }} is {{ planet.distanceFromSun }} from the sun
      </p>
    </div>
    <PlanetsList />
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const planet = await fetch(
      `https://api.nuxtjs.dev/planets/${params.slug}`
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.status);
    });
    return { planet };
  },
  transition: "bounce",
  head() {
    return {
      title: this.planet.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.planet.description,
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `www.thewebsite.com/${this.$route.params.slug}`,
        },
      ],
    };
  },
};
</script>

<style>
</style>
