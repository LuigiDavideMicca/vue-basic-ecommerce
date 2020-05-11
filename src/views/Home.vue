<template>
  <div class="home">
    <NavBar></NavBar>
      <v-carousel
          cycle
          height="650"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            src="../assets/intro1.jpg"
          >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="white--text display-3" style="text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;"><span class="red--text text--darken-2">LUMEN MEC:</span> Made in Italy dal 1977</div>
              </v-row>
          </v-carousel-item>
          <v-carousel-item
            src="../assets/passion.jpg"
          >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="white--text display-3" style="text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;">Produzione <span class="red--text text--darken-2">Artigianale</span></div>
              </v-row>
          </v-carousel-item>
          <v-carousel-item
            src="../assets/intro2.jpg"
          >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="white--text display-3" style="text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;"><span class="red--text text--darken-2">Collezioni</span> Classiche e<span class="red--text text--darken-2"> Moderne</span></div>
              </v-row>
          </v-carousel-item>
          <v-carousel-item
            src="../assets/loghino.jpg"
          >
          </v-carousel-item>
        </v-carousel>
        <v-spacer></v-spacer>
        <v-container>
        <v-row justify="center" align="center" class="mb-10">
          <v-card class="my-10 px-5" dark>
          <h4 class="headline font-weight-regular text-center mt-5 mb-5 red--text text--darken-2">
            La Lumen Mec Nasce nel 1977 con il sogno di portare le più alte vette del <b>MADE IN ITALY</b> al cliente.
          </h4>
          <br>
          <p class="subtitle-1 font-weight-regular text-center mb-5">
            La sua lavorazione strettamente legata all'Italia ed al territorio assicurano una valorizzazione estrema del prodotto finale. Non vengono posti limiti alla creatività del cliente che oltre ai modelli standard ha la possibilità di totale personalizzazione.
            L’azienda, infatti, progetta e realizza esclusivi lampadari di qualsiasi dimensione su disegno fornito dal cliente.<br><br>
            Gli articoli possono essere ammirati alla fiera di Milano “EUROLUCE” dove la LUMEN MEC è sempre presente all’appuntamento con gli operatori italiani ed esteri.
          </p>
          </v-card>
        </v-row>
        <GoToStore/>
        <v-row
        class="fill-height mx-10 my-10"
        align="center"
        justify="center"
        >
          <v-col md="3" sm="6" class="my-10">
          <v-avatar size="200" >
            <img class="imG mx-auto" src="../assets/intro1.jpg">
          </v-avatar>
          <v-spacer></v-spacer>
          <p class="mt-5 headline text-center">Made in Italy</p>
          <p class="mt-5 subtitle-1 text-center">Dal 1977 la nostra produzione è rigorosamente Made in Italy. Ci impegniamo a compiere e mantere tutti i processi e le materie prime interni.</p>
          </v-col>
          <v-col md="3" sm="6" class="my-10">
          <v-avatar size="200">
            <img class="imG mx-auto" src="../assets/passion.jpg">
          </v-avatar>
          <v-spacer></v-spacer>
          <p class="mt-5 headline text-center">Artigianale</p>
          <p class="mt-5 subtitle-1 text-center">I nostri metodi di lavorazione dei materiali mantengono un impronta artigianale basata sulle tecniche tipiche del nostro paese.</p>
          </v-col>
          <v-col md="3" sm="6" class="my-10">
          <v-avatar size="200">
            <img class="imG mx-auto" src="../assets/intro2.jpg">
          </v-avatar>
          <v-spacer></v-spacer>
          <p class="mt-5 headline text-center">Restauro</p>
          <p class="mt-5 subtitle-1 text-center">Grazie ai numerosi anni di lavoro nel settore compiamo restauri su numerose tipologie di illuminazione portandoli alla bellezza originale.</p>
          </v-col>
          <v-col md="3" sm="6" class="my-10">
          <v-avatar size="200">
            <img class="imG mx-auto" src="../assets/loghino.jpg">
          </v-avatar> 
          <v-spacer></v-spacer>
          <p class="mt-5 headline text-center">Collezioni Esclusive</p>
          <p class="mt-5 subtitle-1 text-center">Le nostre collezioni variano dal Moderno al Classico, con la stessa passione e lo stesso know-how per soddisfare il cliente.</p>
          </v-col>
        </v-row>
        </v-container>    
  <LumenFooter></LumenFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar.vue'
import LumenFooter from '../components/LumenFooter.vue'
import GoToStore from '../components/GoToStore.vue'
export default {
  name: 'home',
    components: {
        NavBar,
        LumenFooter,
        GoToStore
    },
    data() {
      return {
      }
    },
    methods: {
  }
}
</script>

<style scoped>
</style>
