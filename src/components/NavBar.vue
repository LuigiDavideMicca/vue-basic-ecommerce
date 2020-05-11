<template>
  <div>
    <v-app-bar dark clipped-left>
      <router-link to="/" style="text-decoration:none">
        <img class="mr-3 mt-2" :src="require('../assets/logo.png')" style="border-radius:100%" height="55rem"/>
      </router-link>      
      <v-toolbar-title>LUMEN MEC SRL</v-toolbar-title>
      <v-toolbar-title class="hidden-md-and-down">-Illuminazione Made in Italy</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="mt-7 hidden-sm-and-down">
        <router-link to="/azienda" style="text-decoration:none" >
          <v-btn text>Azienda</v-btn>
        </router-link>
        <router-link to="/produzione-interna" style="text-decoration:none">
          <v-btn text>produzione interna</v-btn>
        </router-link>
        <router-link to="/multimarca" style="text-decoration:none">
          <v-btn text>multimarca</v-btn>
        </router-link>
        <router-link to="/contatti" style="text-decoration:none">
          <v-btn text>Contatti</v-btn>
        </router-link>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-md-and-up mt-5">
        <div  @click.stop="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </div>
      </v-toolbar-items>
    </v-app-bar>  
    <v-navigation-drawer
      v-model="drawer"
      temporary
      absolute
      width = "300"
      id = "drawer"
      dark
    >
   <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="../assets/logo.png">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Lumen Mec Srl</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
      <router-link to="/" style="text-decoration:none">
        <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="font-weight-bold body-1">Home</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link to="/azienda" style="text-decoration:none">
        <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-store</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="font-weight-bold body-1">Azienda</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link to="/produzione-interna" style="text-decoration:none">
         <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-storefront</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="font-weight-bold body-1">Produzione Interna</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link to="/multimarca" style="text-decoration:none">
         <v-list-item>
            <v-list-item-icon>
              <v-icon>fas fa-shopping-basket</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold body-1">Multimarca</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </router-link>
        <router-link to="/contatti" style="text-decoration:none">
          <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-email</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold body-1">Contatti</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  data: () => ({
    drawer: null 
  }),
};
</script>
