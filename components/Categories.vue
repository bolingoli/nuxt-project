<template>
  <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="800"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      show-arrows
    >
      <v-slide-item
        v-for="(m,index) in model"
        :key="index"
      >
        <div

          class="ma-4"
          style="height: 150px; width: 100px;"
        >
          <v-img

            :src="m.src"
            style="object-fit: cover;"
            class="rounded-circle"
          />

          <div class="text-center mt-5">
            <p>{{ m.title }}</p>
          </div>

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
        </div>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>

export default {
  data: () => ({
    model: [
      { title: 'Eğitim', src: 'https://img.kitapyurdu.com/v1/getImage/fn:11450309/wh:cf0e5130c' },
      { title: 'Siyaset', src: 'https://img.kitapyurdu.com/v1/getImage/fn:11450304/wh:6b14bf3db' },
      { title: 'Tarih', src: 'https://img.kitapyurdu.com/v1/getImage/fn:11450303/wh:e1d1235e0' },
      { title: 'Çocuk', src: 'https://img.kitapyurdu.com/v1/getImage/fn:11450301/wh:d7d45cfa7' },
      { title: 'Edebiyat', src: 'https://img.kitapyurdu.com/v1/getImage/fn:11450297/wh:b4254286f' },
      { title: 'Felsefe', src: 'https://img.kitapyurdu.com/v1/getImage/fn:11450307/wh:e7ff24ee5' },
      { title: 'Akademik', src: 'https://img.kitapyurdu.com/v1/getImage/fn:11453934/wh:338a608b0' },
      { title: 'Ders', src: 'https://img.kitapyurdu.com/v1/getImage/fn:11450312/wh:ad01a82f4' },
      { title: 'Sınav', src: 'https://img.kitapyurdu.com/v1/getImage/fn:11450311/wh:ba3c9d166' }
    ]

  })

}
</script>
