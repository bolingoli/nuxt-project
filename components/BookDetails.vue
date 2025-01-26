<template>
  <div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    <div class="container">
      <v-card>
        <v-row md="12">
          <v-col md="4">
            <v-img
              :src="getD.src"
              class="my-4 mx-2"
            />
            <v-divider />
            <v-btn
              class="mx-4 my-4"
              fab
              dark
              color="#EF6C00"
            >
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>
            <v-divider />
            <div
              style="display: block;"
              class="my-3 mx-4"
            >
              <v-icon left>
                mdi-pencil
              </v-icon>
              Yorumlar
            </div>

            <div
              style="display: block;"
              class="my-3 mx-4"
            >
              <v-icon left>
                mdi-pencil
              </v-icon>
              Yorumlar
            </div>
          </v-col>
          <v-col md="8">
            <v-card>
              <v-row md="12">
                <v-col md="8">
                  <v-card>
                    <h1
                      style="font-weight: normal;"
                      class="mx-5"
                    >
                      {{ getD.title }}
                    </h1>
                    <div class="my-7 mx-5">
                      <a
                        href="#"
                        class="mx-3"
                      >Mert Arık</a> |
                      <a
                        href="#"
                        class="mx-3 "
                      >TİMAŞ ÇOCUK YAYINLARI</a>
                    </div>
                    <v-btn
                      class="mx-5 my-2"
                      style="background-color: white;"
                    >
                      <v-rating
                        v-model="rating"
                        background-color="orange lighten-3"
                        color="orange"
                        large
                      />
                    </v-btn>
                    <h4 class="mx-5 my-5">
                      Herkes zürafa resmi çizebilir. Siz de çizebilirsiniz! Moni, resim derslerini çok severdi. İlginç şekiller çizmeye ve renklerle oynamaya bayılırdı. Fakat bir gün tuhaf bir şey oldu. Moni resim çizemedi. Hem de zürafa resmini… Öğretmeni, Moni’yi hayal ettiği her zürafayı çizebileceği konusunda cesaretlendirmeye çalışsa da o ikna olmuyordu. Ancak öğretmeninin pes etmeye niyeti yoktu. Tabii Moni’nin de… Peki Moni, zürafa resmi çizebildi mi?
                    </h4>
                    <v-expansion-panels>
                      <v-expansion-panel
                        v-for="(item,i) in 1"
                        :key="i"
                      >
                        <v-expansion-panel-header style="width: 185px;">
                          <v-btn small>
                            devamını oku...
                          </v-btn>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <h4>
                            Hayal etmenin, kendine inanmanın, azim ve cesaretin önemini vurgulayan “Benim Zürafam Uçabilir”, kendini keşfetmek ve özgürce hayal etmek isteyen herkesi büyüleyici dünyasına ortak olmaya davet ediyor.
                          </h4>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>

                    <v-row>
                      <v-col
                        md="3"
                        class="mx-5 my-3"
                      >
                        <p>Çizer:</p>
                        <p>Yayın Tarihi:</p>
                        <p>ISBN:</p>
                        <p>Dil:</p>
                        <p>Sayfa Sayısı:</p>
                        <p>Cilt Tipi:</p>
                        <p>Kağıt Cinsi:</p>
                        <p>Boyut:</p>
                      </v-col>
                      <v-col
                        md="5"
                        align-center
                        class="my-3"
                      >
                        <p>adwadwadawdawd</p>
                        <p>adwadwadawdawd</p>
                        <p>adwadwadawdawd</p>
                        <p>adwadwadawdawd</p>
                        <p>adwadwadawdawd</p>
                        <p>adwadwadawdawd</p>
                        <p>adwadwadawdawd</p>
                        <p>adwadwadawdawd</p>
                      </v-col>
                    </v-row>

                    <v-divider />
                    <p class="mx-5 my-3">
                      Bu üründen 11.219 adet satın alınmıştır.
                    </p>
                    <v-divider />

                    <p class="mx-5 my-3">
                      İlgili Kategoriler:
                    </p>
                    <p class="mx-5 my-3">
                      İlgili Kategoriler:
                    </p>
                  </v-card>
                </v-col>
                <v-col md="4">
                  <v-card style="margin-top: 75px; margin-right:15px">
                    <v-card-title>
                      <div>
                        <div>
                          <p
                            class="mx-1 justify-start"
                            style="margin-top: 10px; display:inline-block ; font-size: small;"
                          >
                            Kitapyurdu Fiyatı :
                          </p>
                          <div
                            style="background-color:red; display:inline-block;"
                            class="justify-end mr-auto"
                          >
                            %30
                          </div>
                        </div>

                        <div style="background-color:orange; display:inline-block;">
                          {{ getD.price }} TL
                        </div>
                      </div>
                    </v-card-title>
                    <v-card-text>
                      <v-row>
                        <v-col
                          md="3"
                          class="my-auto"
                        >
                          <v-btn
                            class=""
                            fab
                            dark
                            color="#EF6C00"
                            x-small
                            style="display: block;"
                          >
                            <v-icon dark>
                              mdi-plus
                            </v-icon>
                          </v-btn>
                        </v-col>
                        <v-col md="9">
                          <div style="display: inline-block; ">
                            24 Saatte Kargoda
                          </div>
                          <div style="display: inline-block;">
                            Stok Miktarı +10
                          </div>
                        </v-col>
                      </v-row>
                    </v-card-text>

                    <v-card-actions
                      style="background-color: orange;"
                      class="mx-3 my-4"
                    >
                      <v-btn
                        icon
                        style="margin-left: 85px;"
                        @click="addBasket(getIndex.id)"
                      >
                        Sepete Ekle
                        <v-icon>mdi-cart</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <div class="mx-3 my-2">
                      <p
                        class="my-1"
                        style="font-size: small;"
                      >
                        Kazancınız: 5,25
                      </p>
                      <p
                        class="my-1"
                        style="font-size: small;"
                      >
                        Kazanacağınız Puan: 22
                      </p>
                    </div>

                    <v-divider />

                    <div
                      style="display: block;"
                      class="my-4 mx-2"
                    >
                      <v-icon left>
                        mdi-pencil
                      </v-icon>
                      Favorilerime Ekle
                    </div>

                    <div
                      style="display: block;"
                      class="my-4 mx-2"
                    >
                      <v-icon left>
                        mdi-pencil
                      </v-icon>
                      Alışveriş Listesine Ekle
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['product'],
  data: () => ({
    rating: 4
  }),

  // eslint-disable-next-line vue/order-in-components
  computed: {
    products () {
      return this.$store.getters.getProducts
    },
    getD () {
      return this.products[
        this.$route.params.details
          .split('-')
          .slice(-1)
          .pop()
      ]
    }
  }

}
</script>
