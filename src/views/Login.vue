<template>
<v-app>
  <NavBar></NavBar>
    <v-content>
        <v-container>
        <v-row align="center" justify="center">
        </v-row>
        <v-container
            fluid
        >
            <v-row
            align="center"
            justify="center"
            class="my-10"
            >
            <v-col
                cols="12"
                sm="8"
                md="4"
                class="my-10"
            >
                <v-card class="elevation-12 my-10">
                <v-toolbar
                    dark
                    flat
                >
                    <v-toolbar-title>Effettua il Login</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                        prepend-icon="mdi-email"
                        type="email"
                    ></v-text-field>

                    <v-text-field
                        v-model="password"
                        :counter="20"
                        label="Password"
                        required
                        prepend-icon="mdi-security"
                        type="password"
                    ></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-3"
                        class="mr-4" @click="login()" dark large>
                        Accedi
                        <v-icon dark>mdi-lock-open</v-icon>
                    </v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
            </v-row>
        </v-container>
        </v-container>
    </v-content>
</v-app>
</template>

<script>
import {auth} from '@/main';
import NavBar from '../components/NavBar.vue'
  export default {
    name: 'login',
    data: () => ({
      valid: false,
      password: '',
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    components: {
      NavBar
    },
    methods: {
      login() {
        auth.signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
           this.$router.replace('admin/dashboard');
        })
        .catch((err) =>{
            alert('Log In Fallito' + err.message)
        })
      }
    }
  }
</script>

<style scoped>
</style>