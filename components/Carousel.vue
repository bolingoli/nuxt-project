<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      contain
    />
  </v-carousel>
</template>
<script>

import { mapState } from 'vuex'
export default {

  computed: {
    ...mapState(['items'])
  }
}
</script>
