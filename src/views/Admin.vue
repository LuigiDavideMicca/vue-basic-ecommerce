<template>
  <div class="admin">
    <v-row no-gutters>
      <v-col lg="2">
            <v-card
    height="100vh"
    width="256"
  >
    <v-navigation-drawer absolute permanent left dark  src="../assets/sidebar.jpg">
   <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="../assets/logo.png">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="mb-3">Lumen Mec Srl</v-list-item-title>
            <v-list-item-subtitle>Pannello di Controllo</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
      <router-link to="/admin/dashboard" style="text-decoration:none">
        <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="font-weight-bold body-1">Dashboard</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link to="/admin/prodotti" style="text-decoration:none">
         <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-ballot</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold body-1">Prodotti</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link to="/admin/prodotti-multimarca" style="text-decoration:none">
         <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-brush</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="font-weight-bold body-1">Prodotti Multimarca</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </router-link>
        <router-link to="/admin/info" style="text-decoration:none">
          <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-help-box</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold body-1">Info</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logout" color="blue-grey accent-4">Esci</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
      </v-col>
        <v-col md="9">
            <router-view/>
        </v-col>
    </v-row>
 </div>
</template>

<script>
import {auth} from '@/main';
export default {
  name: 'admin',
data () {
    return {
      right: null,
    }
  },
  methods: {
    logout() {
      auth.signOut().then(() => {
        this.$router.replace('login')
    });
    },
  }

}
</script>
