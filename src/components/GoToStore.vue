<template>
    <div class="GoToStore">
        <v-row align="center" justify="center" class="my-10">
        <router-link to="/produzione-interna" style="text-decoration:none">
          <v-btn color="red darken-2" dark large> Scopri la nostra Produzione
              <v-icon right>fas fa-angle-right</v-icon>
          </v-btn>
        </router-link>
        </v-row>
    </div>
</template>

<script>
export default {
  name: 'GoToStore',
};
</script>
