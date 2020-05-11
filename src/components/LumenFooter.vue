<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="white--text flex"
    >
    <v-row>
      <v-col md="19">
        <v-card-text class="white--text subtitle-1 mx-4 mt-4">
            Per avere successo occorrono dinamismo, serietà e molto impegno. Sono queste le qualità prime della LUMEN MEC, che dal 1977 crea lampadari in stile classico con ottimi risultati, grazie all’esperienza dei suoi artigiani.
        </v-card-text>
      </v-col>
            <v-col md="3">
        <v-card-text >
            <v-btn
            class="my-3 mx-3"
            icon
            >
            <v-icon size="24px" class="red--text text--darken-2">fab fa-facebook</v-icon>
            </v-btn>
            <v-btn
            class="my-3 mx-3"
            icon
            >
            <a href="https://www.linkedin.com/company/lumen-mec-srl/" target="_blank" style="text-decoration:none;">
              <v-icon size="24px" class="red--text text--darken-2">fab fa-linkedin</v-icon>
            </a>
            </v-btn>
            <v-btn
            class="my-3 mx-3"
            icon
            >
            <v-icon size="24px" class="red--text text--darken-2">fab fa-instagram</v-icon>
            </v-btn>

        </v-card-text>
      </v-col>
    </v-row>

      <v-divider></v-divider>

      <v-card-text class="subtitle-1 white--text text-center">
       <strong>  &copy; Lumen Mec Srl</strong>  <span class="red--text text--darken-2"> -  {{ new Date().getFullYear() }}</span>
        <br>
        <a href="https://spiritech.it/" class="white--text" target="_blank" style="text-decoration:none;"> Created By <span class="red--text text--darken-2">Spiritech</span></a>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'LumenFooter',
data: () => ({
    }),
};
</script>
