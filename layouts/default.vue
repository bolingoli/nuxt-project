<template>
  <v-app>
    <Navbar />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>
<script>

export default {
  data () {
    return {
      id: null
    }
  },
  created () {
    this.$store.dispatch('getProducts')
  }

}

</script>
