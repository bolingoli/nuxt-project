<template>
  <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="800"
  >
    <v-slide-group
      class="pa-4"
      show-arrows
    >
      <v-slide-item
        v-for="product in products"
        :key="product.id"
        :product="product"
      >
        <v-card
          class="ma-4"
          height="250"
          width="100"
          @click="$router.push({ path: `/Details/${product.id}` })"
        >
          <v-img
            height="200"
            width="100"
            :src="product.src"
            style="object-fit: cover;"
          />
          <v-card-text>
            <div>{{ product.title }}</div>
          </v-card-text>
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              />
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
// import { mapGetters } from 'vuex'
// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag'

export default {

  // computed: {

  //   ...mapGetters(['getData'])
  // },
  methods: {

  },
  apollo: {
    products: gql`
      query getProducts{
        products {
          id
          title 
          src
          price
        }
      }
    `
  }
}
</script>
