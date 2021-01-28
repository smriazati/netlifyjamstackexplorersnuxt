<template>
  <div class="container">
    <div>
      <img :src="planet.image" :alt="planet.title" />
      <h1 class="title">{{ planet.title }}</h1>
      <h2>Data</h2>
      <pre>{{ $data.planet }}</pre>
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
