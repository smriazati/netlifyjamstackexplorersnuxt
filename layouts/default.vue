<template>
  <div>
    <nav>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="about">About</nuxt-link></li>
      </ul>
    </nav>
    <nuxt />
  </div>
</template>

<script>
export default {
  head: {
    title: "Nuxt Mission",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "JAMSTACK Mission Working Files",
      },
    ],
  },
};
</script>

