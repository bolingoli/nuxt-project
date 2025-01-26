<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="600"
  >
    <v-card-text>
      <v-form v-model="valid">
        <div>
          <v-col width="400px">
            <v-row
              cols="12"
              md="4"
            >
              <p style="margin-top: 25px; margin-right: 95px;">
                Ad:
              </p>

              <v-col class=".col-md-12">
                <v-text-field
                  v-model="user.firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="Ad"
                  solo
                />
              </v-col>
            </v-row>
            <v-row
              cols="12"
              md="4"
            >
              <p style="margin-top: 25px; margin-right: 75px;">
                Soyad:
              </p>

              <v-col class=".col-md-12">
                <v-text-field
                  v-model="user.lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="Soyad"
                  solo
                />
              </v-col>
            </v-row>
            <v-row
              cols="12"
              md="4"
            >
              <p style="margin-top: 25px; margin-right: 68px;">
                E posta:
              </p>

              <v-col class=".col-md-12">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  :counter="10"
                  label="E posta"
                  solo
                />
              </v-col>
            </v-row>
            <v-row
              cols="12"
              md="4"
            >
              <p style="margin-top: 25px; margin-right: 85px;">
                Şifre:
              </p>

              <v-col class=".col-md-12">
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  :counter="10"
                  label="Şifre"
                  solo
                />
              </v-col>
            </v-row>
            <v-row
              cols="12"
              md="4"
            >
              <p style="margin-top: 25px; margin-right: 35px;">
                Şifre(Tekrar):
              </p>

              <v-col class=".col-md-12">
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  :counter="10"
                  label="Şifre Tekrar"
                  solo
                />
              </v-col>
            </v-row>
            <v-row>
              <v-checkbox
                v-model="checkbox"
              />
              <p style="margin-top: 21px; margin-left: 25px;">
                Kampanyalardan haberdar olmak için elektronik ileti almak istiyorum.
              </p>
            </v-row>
            <v-row>
              <v-checkbox
                v-model="checkbox1"
              />
              <p style="margin-top: 21px; margin-left: 25px;">
                Kişisel Verilerin Korunması'ni okudum ve kabul ediyorum.
              </p>
            </v-row>
            <v-row>
              <v-card-actions>
                <v-btn
                  background-color="#546E7A"
                  text
                  style="background-color:#CFD8DC;"
                  class="black--text"
                >
                  Temizle
                </v-btn>
              </v-card-actions>
              <v-spacer />
              <v-card-actions>
                <v-btn
                  color="#FFE0B2"
                  text
                  style="background-color: orange;"
                  class="white--text"
                  @click="createUser()"
                >
                  Devam
                  <!-- <NuxtLink style="text-decoration:none "  class="white--text"   @click="register" >Devam</NuxtLink> -->
                </v-btn>
              </v-card-actions>
            </v-row>
          </v-col>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>

import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data: () => ({
    valid: false,
    user: {
      firstname: '',
      lastname: ''

    },
    email: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],

    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    password: '',

    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length <= 10 || 'Name must be less than 6 characters'
    ],
    checkbox: false,
    checkbox1: false
  }),
  methods: {
    async createUser () {
      await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((_res) => {
          alert('welcome ' + this.user.firstname)
          this.$router.push({ path: '/' })
        })
        .catch((e) => {
          alert(e.message)
          this.$router.push({ path: '/' })
        })
    }
  }
}
</script>
