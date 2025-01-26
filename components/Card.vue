<template>
  <v-container>
    <v-row
      v-for="(item, i) in items"
      :key="i"
    >
      <v-col
        cols="4"
      >
        <v-card>
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar
              class="ma-3"
              size="60"
              tile
            >
              <v-img :src="item.src" contain />
            </v-avatar>
            <div>
              <v-card-title
                class="text-h5"
                v-text="item.title"
              />

              <v-card-subtitle v-text="item.artist" />
            </div>
          </div>
          <v-divider class="mx-4" />
          <v-card-text>
            <v-chip-group

              column
            >
              <v-chip class="orange">
                Sepete git
              </v-chip>
              <v-spacer />
              <v-chip class="red">
                Satın al
              </v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        src: 'https://img.kitapyurdu.com/v1/getImage/fn:4493743/wi:120/wh:true',
        title: 'Momo',
        artist: 'Foster the People'
      },
      {
        src: 'https://img.kitapyurdu.com/v1/getImage/fn:7027950/wi:120/wh:true',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding'
      }
    ]
  })
}
</script>

<style>
    .orange{
        background-color: orange;
        margin-right: auto;
    }
    .red{
        background-color: red;
    }
</style>
