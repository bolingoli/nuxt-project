<template>
  <v-sheet>
    <v-app-bar
      color="black"
      dense
    >
      <v-toolbar-items class="white--text">
        <v-btn to="Login" style="background-color: orange; box-shadow: none;">
          Giriş Yap
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-items>
        <v-btn to="Register" style="background-color:black;border-color: transparent; box-shadow:none;" class="mr-5 white--text">
          Üye ol
        </v-btn>
      </v-toolbar-items>

      <v-spacer />

      <v-menu
        offset-y
      >
        <template #activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            class="white--text"
            style="margin-right: 75px;"
            v-on="on"
          >
            Listelerim
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(list,index) in lists"
            :key="index"
            @click="() => {}"
          >
            <v-list-item-title>{{ list.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu
        offset-y
      >
        <template #activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            style="margin-right: 75px;"
            class="white--text"
            v-on="on"
          >
            Sipariş Takibi
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(siparisTakibi,index) in siparisTakibis"
            :key="index"
            @click="() => {}"
          >
            <v-list-item-title>{{ siparisTakibi.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu
        offset-y
      >
        <template #activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            style="margin-right: 50px;"
            class="white--text"
            v-on="on"
          >
            Türkçe
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(language,index) in languages"
            :key="index"
            @click="() => {}"
          >
            <v-list-item-title>{{ language.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu
        offset-y
      >
        <template #activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            style="margin-right: 50px;"
            class="white--text"
            v-on="on"
          >
            TL
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(money,index) in moneys"
            :key="index"
            @click="() => {}"
          >
            <v-list-item-title>{{ money.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu
        offset-y
      >
        <template #activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            class="white--text"
            style="margin-right: 25px;"
            v-on="on"
          >
            Yardım
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(help,index) in helps"
            :key="index"
            :menu-props="{bottom:true,offsetY:true}"
            @click="() => {}"
          >
            <v-list-item-title>{{ help.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <div>
      <v-app-bar
        color="white"
      >
        <v-toolbar-title style="font-weight: bold;" class="green--text" to="/">
          <NuxtLink style="font-weight: bold; text-decoration:none" class="green--text" to="/">
            Kitapyurdu.com
          </NuxtLink>
        </v-toolbar-title>

        <v-spacer />

        <v-text-field
          style="margin-top: 25px; "
          placeholder="kitap adı,yazar veya yayın evi"
          dense
          solo
        />

        <v-btn style="background-color: orange;" to="ProductFiltering">
          <v-icon>mdi-magnify </v-icon>
        </v-btn>

        <v-spacer />
        <div class="text-center">
          <v-menu offset-y>
            <template #activator="{ on, attrs }">
              <v-btn
                dark
                v-bind="attrs"
                style="margin-right: 25px; background-color: transparent; box-shadow: none;"
                v-on="on"
              >
                <p style="color: black;" class="my-2 mx-1">
                  Sepetim
                </p>

                <v-icon style="color: orange;">
                  mdi-cart
                </v-icon>
              </v-btn>
            </template>
            <v-card style="width: 400px;">
              <div>
                <v-row
                  v-for="(item, i) in baskets"
                  :key="i"
                >
                  <v-col>
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

                          <v-card-subtitle v-text="item.id" />
                        </div>
                      </div>
                      <v-divider class="mx-4" />
                      <v-card-text>
                        <v-chip-group
                          v-model="selection"
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
              </div>
            </v-card>
          </v-menu>
        </div>
      </v-app-bar>
    </div>
  </v-sheet>
</template>

<script>

export default {
  data () {
    return {
      helps: [
        { title: 'Yardım ve İşlem Rehberi' },
        { title: 'Sıkça Sorulan Sorular' },
        { title: 'Video Yardım' },
        { title: 'Önerim Var' },
        { title: 'İletişim' }
      ],
      lists: [
        { title: 'Favorilerim' },
        { title: 'Alışveriş Listem' },
        { title: 'Okuma Listelerim' },
        { title: 'Uyarım Listem' },
        { title: 'Satın Aldıklarım' }

      ],
      siparisTakibis: [
        { title: 'Şiparişlerim' },
        { title: 'Müşteri Hizmetler' },
        { title: 'Havale/EFT' }
      ],
      languages: [
        { title: 'Türkçe' },
        { title: 'English' },
        { title: 'Deutsch' }
      ],
      moneys: [
        { title: 'TL' },
        { title: 'EUR' },
        { title: 'GBP' },
        { title: 'USD' }
      ]
    }
  }
}
</script>

<style>
  .a{
    opacity: 1;
    color: black;
  }

</style>
