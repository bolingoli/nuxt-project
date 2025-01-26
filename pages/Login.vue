/* eslint-disable vue/order-in-components */
<template>
  <v-container>
    <v-card width="350px">
      <v-card-title style="background-color:#CFD8DC; font-weight: bold; font-size: x-large;">
        Hoşgeldiniz
      </v-card-title>
      <v-divider />
      <v-card-text>
        <div v-if="!getLoggedIn">
          <v-form v-model="valid">
            <v-container>
              <v-col style="width: 250px;">
                <v-row
                  cols="12"
                  md="4"
                >
                  <p style="margin-right: 5px;margin-top: 25px;">
                    Email:
                  </p>
                  <v-col class=".col-md-12">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      solo
                    />
                  </v-col>
                </v-row>
                <v-row
                  cols="12"
                  md="4"
                >
                  <p style="margin-top: 25px; margin-right: 5px;">
                    Şifre:
                  </p>

                  <v-col>
                    <v-text-field
                      v-model="password"
                      :rules="passwordRules"
                      :counter="10"
                      label="Şifre"
                      solo
                    />
                  </v-col>
                </v-row>

                <v-row>
                  <v-checkbox
                    v-model="checkbox"
                    :label="`Beni Hatırla:`"
                  />
                  <p style="margin-top: 21px; margin-left: 25px;">
                    Şifremi Unuttum
                  </p>
                </v-row>
                <v-row
                  cols="12"
                >
                  <v-card-actions>
                    <v-btn
                      text
                      color="white"
                      style="background-color: orange; margin-left: 54px;"
                      class="px-13 py-3"
                      x-large
                      @click="signIn()"
                    >
                      Giriş Yap
                    </v-btn>
                  </v-card-actions>
                </v-row>
                <v-row
                  cols="12"
                >
                  <v-card-actions>
                    <v-btn
                      text
                      color="black"
                      style="background-color: white; margin-left: 50px;"
                      class="px-5 py-2"
                      x-large
                    >
                      Ücretsiz Üye ol
                    </v-btn>
                  </v-card-actions>
                </v-row>
              </v-col>
            </v-container>
          </v-form>
          <!-- <v-snackbar
                            v-model="snackbar"
                            :timeout="4000"
                            absolute
                            bottom
                            center
                        >
                            {{ snackbarText }}
                        </v-snackbar> -->
        </div>

        <div v-if="getLoggedIn">
          <form>
            <div class="div55">
              Çıkış Yapmak İçin Tıklayınız
            </div>
            <v-btn @click="signOut()">
              ÇIKIŞ
            </v-btn>
          </form>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>

import firebase from 'firebase/app'
import 'firebase/auth'
import { mapGetters } from 'vuex'

export default ({
  data: () => ({
    valid: false,
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length <= 10 || 'Password must be less than 6 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  computed: {
    ...mapGetters(['getLoggedIn'])
  },
  methods: {
    async signIn () {
      await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((_res) => {
          // eslint-disable-next-line no-console
          alert('Welcome')
          this.$store.dispatch('getLoggedIn', true)
          this.$router.push({ path: '/' })
        })
        .catch((e) => {
          // eslint-disable-next-line no-console
          alert(e.message)
          this.$router.push({ path: '/' })
        })
    },
    async signOut () {
      await firebase.auth().signOut()
        .then((_res) => {
          this.$store.dispatch('getLoggedIn', false)
          this.$router.push({ path: '/Login' })
        })
    }
  }
})

</script>
