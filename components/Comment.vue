<template>
  <v-app>
    <v-card>
      <v-card class="py-5 px-10" style="background-color: #f5faf0;">
        <v-row md="2">
          <v-col md="3">
            <v-card>
              <v-card-title class="d-flex justify-center">
                Ürüne Puan Ver
              </v-card-title>
              <v-card-text>
                <v-rating

                  color="yellow darken-3"
                  background-color="grey darken-1"
                  empty-icon="$ratingFull"
                  half-increments
                  hover
                  large
                  class="d-flex justify-center"
                />

                <p class="d-flex justify-center my-3">
                  İyi
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col md="8">
            <v-textarea

              solo
              counter
              maxlength="120"
              style=" background-color: white;"
              placeholder="Yorum Yaz"
            />
          </v-col>
          <v-col md="1">
            <v-btn style="margin-top: 140px; background-color: orange;">
              <p class="mb-auto" style="color: white;">
                Gönder
              </p>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
      <v-card class="py-5 px-10">
        <v-row md="1">
          <v-col md="1" class="my-5">
            <p class="my-auto">
              Sırala:
            </p>
          </v-col>
          <v-col md="3">
            <v-select
              :items="items"
              label="Outlined style"
              outlined
              class="my-1"
              :menu-props="{bottom:true,offsetY:true}"
            />
          </v-col>
          <v-col md="3">
            <v-checkbox

              :label="`Satın Almaları Göster:`"
            />
          </v-col>
          <v-col offset-md="2" md="3" class="my-5">
            <a href="#" style="text-decoration: none; color: #dadada;">Tüm Yorumları Göster</a>
          </v-col>
        </v-row>
      </v-card>
      <v-card class="py-5 px-10">
        <v-row md="8">
          <v-row>
            <v-col md="1">
              <div style="display: inline-block;">
                <v-btn
                  class="mx-2 my-5"
                  fab

                  large
                  color="#ffedc1"
                >
                  <v-icon x-large style="color: #ff8000;">
                    mdi-account
                  </v-icon>
                </v-btn>
              </div>
            </v-col>

            <v-col md="11">
              <div style="display: inline-block;">
                <v-card>
                  <v-card-title>
                    <a style="font-size: small;">
                      cy
                    </a>
                    <v-rating
                      v-model="rating1"
                      background-color="orange lighten-3"
                      color="orange"
                    />
                    <p style="font-size: small;" class="my-1">
                      19 Ekim 2021
                    </p>
                    <v-icon class="mx-2" style="color: #ff8000;">
                      mdi-cart
                    </v-icon>
                  </v-card-title>
                  <v-card-text>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit voluptate praesentium nihil expedita, excepturi cupiditate magnam, aperiam consequuntur, quam omnis. Officiis eius rem itaque odit iusto, facilis a quam?
                    </p>
                  </v-card-text>
                </v-card>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="1">
              <div style="display: inline-block;">
                <v-btn
                  class="mx-2 my-5"
                  fab

                  large
                  color="#ffedc1"
                >
                  <v-icon x-large style="color: #ff8000;">
                    mdi-account
                  </v-icon>
                </v-btn>
              </div>
            </v-col>

            <v-col md="11">
              <div style="display: inline-block;">
                <v-card>
                  <v-card-title>
                    <a style="font-size: small;">
                      cy
                    </a>
                    <v-rating
                      v-model="rating1"
                      background-color="orange lighten-3"
                      color="orange"
                    />
                    <p style="font-size: small;" class="my-1">
                      19 Ekim 2021
                    </p>
                    <v-icon class="mx-2" style="color: #ff8000;">
                      mdi-cart
                    </v-icon>
                  </v-card-title>
                  <v-card-text>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit voluptate praesentium nihil expedita, excepturi cupiditate magnam, aperiam consequuntur, quam omnis. Officiis eius rem itaque odit iusto, facilis a quam?
                    </p>
                  </v-card-text>
                </v-card>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="1">
              <div style="display: inline-block;">
                <v-btn
                  class="mx-2 my-5"
                  fab

                  large
                  color="#ffedc1"
                >
                  <v-icon x-large style="color: #ff8000;">
                    mdi-account
                  </v-icon>
                </v-btn>
              </div>
            </v-col>

            <v-col md="11">
              <div style="display: inline-block;">
                <v-card>
                  <v-card-title>
                    <a style="font-size: small;">
                      cy
                    </a>
                    <v-rating
                      v-model="rating1"
                      background-color="orange lighten-3"
                      color="orange"
                    />
                    <p style="font-size: small;" class="my-1">
                      19 Ekim 2021
                    </p>
                    <v-icon class="mx-2" style="color: #ff8000;">
                      mdi-cart
                    </v-icon>
                  </v-card-title>
                  <v-card-text>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit voluptate praesentium nihil expedita, excepturi cupiditate magnam, aperiam consequuntur, quam omnis. Officiis eius rem itaque odit iusto, facilis a quam?
                    </p>
                  </v-card-text>
                </v-card>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="1">
              <div style="display: inline-block;">
                <v-btn
                  class="mx-2 my-5"
                  fab

                  large
                  color="#ffedc1"
                >
                  <v-icon x-large style="color: #ff8000;">
                    mdi-account
                  </v-icon>
                </v-btn>
              </div>
            </v-col>

            <v-col md="11">
              <div style="display: inline-block;">
                <v-card>
                  <v-card-title>
                    <a style="font-size: small;">
                      cy
                    </a>
                    <v-rating
                      v-model="rating1"
                      background-color="orange lighten-3"
                      color="orange"
                    />
                    <p style="font-size: small;" class="my-1">
                      19 Ekim 2021
                    </p>
                    <v-icon class="mx-2" style="color: #ff8000;">
                      mdi-cart
                    </v-icon>
                  </v-card-title>
                  <v-card-text>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit voluptate praesentium nihil expedita, excepturi cupiditate magnam, aperiam consequuntur, quam omnis. Officiis eius rem itaque odit iusto, facilis a quam?
                    </p>
                  </v-card-text>
                </v-card>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="1">
              <div style="display: inline-block;">
                <v-btn
                  class="mx-2 my-5"
                  fab

                  large
                  color="#ffedc1"
                >
                  <v-icon x-large style="color: #ff8000;">
                    mdi-account
                  </v-icon>
                </v-btn>
              </div>
            </v-col>

            <v-col md="11">
              <div style="display: inline-block;">
                <v-card>
                  <v-card-title>
                    <a style="font-size: small;">
                      cy
                    </a>
                    <v-rating
                      v-model="rating1"
                      background-color="orange lighten-3"
                      color="orange"
                    />
                    <p style="font-size: small;" class="my-1">
                      19 Ekim 2021
                    </p>
                    <v-icon class="mx-2" style="color: #ff8000;">
                      mdi-cart
                    </v-icon>
                  </v-card-title>
                  <v-card-text>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit voluptate praesentium nihil expedita, excepturi cupiditate magnam, aperiam consequuntur, quam omnis. Officiis eius rem itaque odit iusto, facilis a quam?
                    </p>
                  </v-card-text>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </v-row>
      </v-card>
      <v-card class="py-5 px-10">
        <v-row md="1">
          <p class="my-2">
            Gösterilen: 1 ile 5 arası, toplam: 675 (135 Sayfa)
          </p>
          <v-spacer />
          <v-pagination
            v-model="page"
            :length="15"
            :total-visible="7"
            next-icon="mdi-menu-right"
          />
        </v-row>
      </v-card>
    </v-card>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      rating1: 5,
      page: 1
    }
  }
}
</script>
