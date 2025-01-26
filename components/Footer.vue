<template>
  <v-card height="600px" width="100%">
    <v-footer
      v-bind="localAttrs"
      :padless="padless"
      class="lighten-1"
    >
      <v-card
        flat
        tile
        width="100%"
        class="lighten-1 "
      >
        <v-card-text>
          <v-row class="space-between">
            <v-col>
              Mobil Uygulamalar
              <v-btn
                style="background-color: black;"
                class="white--text mx-4"
                x-small
              >
                App Store'dan
              </v-btn>
              <v-btn
                style="background-color: black;"
                class="white--text mx-4"
                x-small
              >
                Google Play
              </v-btn>
              <v-btn
                style="background-color: black;"
                class="white--text mx-4"
                x-small
              >
                AppGalery
              </v-btn>
            </v-col>

            <v-col class="text-right colors">
              Sosyal Medya:
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                icon
                color="primary"
              >
                <v-icon size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-footer>

    <v-row class="text-center" style="margin-top: 10px;">
      <v-col>
        Yardımcı Sayfalar:
        <v-col class="font">
          Yardım ve İşlem Rehberi
        </v-col>
        <v-col class="font">
          Video Yardım
        </v-col>
        <v-col class="font">
          Havale/EFT Bilgileri
        </v-col>
        <v-col class="font">
          Müşteri Hizmetleri
        </v-col>
        <v-col class="font">
          Ürün İadesi
        </v-col>
      </v-col>
      <v-col>
        Popüler Sayfalar:
        <v-col class="font">
          Çok Satan Kitaplar
        </v-col>
        <v-col class="font">
          Yeni Çıkan Kitaplar
        </v-col>
        <v-col class="font">
          Kargo Ödeyen Avantajlı Ürünler
        </v-col>
        <v-col class="font">
          Kampanyalar
        </v-col>
        <v-col class="font">
          Ayın Yazarları
        </v-col>
        <v-col class="font">
          Ayın Yayınevleri
        </v-col>
        <v-col class="font">
          Puan Kataloğu
        </v-col>
        <v-col class="font">
          E-Dergi
        </v-col>
        <v-col class="font">
          Yazarlar Ne okuyor?
        </v-col>
        <v-col class="font">
          Ne okusam
        </v-col>
      </v-col>
      <v-col>
        Özel Sayfalar:
        <v-col class="font">
          Sınav Kitapları
        </v-col>
        <v-col class="font">
          Çocuk Kitapları
        </v-col>
        <v-col class="font">
          Cep Boy Kitaplar
        </v-col>
        <v-col class="font">
          İngilizce Kitaplar
        </v-col>
        <v-col class="font">
          Lisanslı Ürünler
        </v-col>
        <v-col class="font">
          Bookinzi Kültür-Sanat Ürünleri
        </v-col>
        <v-col class="font">
          Oyundan Daha Fazlası
        </v-col>
        <v-col class="font">
          Montessori Oyuncakları
        </v-col>
        <v-col class="font">
          Ahşap Puzzle
        </v-col>
        <v-col class="font">
          Akıl Defteri
        </v-col>
      </v-col>
      <v-col>
        Kitapyurdu Platformları:
        <v-col class="font">
          Kitapyurdu Sesli Kitap
        </v-col>
        <v-col class="font">
          KDY Platformu
        </v-col>
        <v-col class="font">
          KDD Platformu
        </v-col>
        <v-col class="font">
          Kütüphanem Uygulaması
        </v-col>
        <v-col class="font">
          Kitap Kurdu Eklentisi
        </v-col>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-youtube',
      'mdi-instagram'
    ],
    items: [
      'default',
      'absolute',
      'fixed'
    ],
    colors: [
      'blue',
      'blue lighten-2',
      'red',
      'red lighten-2'
    ],
    padless: false,
    variant: 'default'
  }),
  computed: {
    localAttrs () {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    }
  }
}
</script>

<style>
    .font{
        font-weight: lighter;
    }
    .colors :nth-child(1) v-btn{
        color: blue;
    }
</style>
