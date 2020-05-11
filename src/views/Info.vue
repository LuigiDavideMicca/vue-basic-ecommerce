<template>
<div class="Info">
    <v-content class="ml-10" style="width: 1500px">
        <p class="py-5 display-2 py-3 red--text text--darken-2 text-center">Pagina Informazioni</p>
          <v-spacer></v-spacer>
        <p class="headline pt-5 pb-10 font-weight-regular text-center">In questa Pagina sono presenti le logiche ed i funzionamenti del sito.</p>
        <v-row class="mt-10">
            <v-col md="4">
                <v-card shaped dark>
                    <v-card-title class="headline red--text text--darken-2" style="text-transform: uppercase;">Dashboard</v-card-title>
                    <v-spacer></v-spacer>
                    <v-card-text class="title font-weight-regular">Tramite questa sezione del portale è possibile visuliazzare gli ordini per contattare i clienti interessati. Successivamente possono essere eliminati una volta evasi.</v-card-text>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card shaped dark>
                    <v-card-title class="headline red--text text--darken-2" style="text-transform: uppercase;">Prodotti</v-card-title>
                    <v-spacer></v-spacer>
                    <v-card-text class="title font-weight-regular">Tramite questa sezione del portale è possibile aggiungere e visuliazzare i prodotti presenti nella pagina <i>"Produzione Interna"</i>. E' possibile inoltre eliminare gli articoli presenti.</v-card-text>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card shaped dark>
                    <v-card-title class="headline red--text text--darken-2" style="text-transform: uppercase;">Prodotti Multimarca</v-card-title>
                    <v-spacer></v-spacer>
                    <v-card-text class="title font-weight-regular">Tramite questa sezione del portale è possibile aggiungere e visuliazzare i prodotti presenti nella pagina <i>"Multimarca"</i>. E' possibile inoltre eliminare gli articoli presenti.</v-card-text>
                </v-card>
            </v-col>
        </v-row>
   </v-content>
</div>
    
</template>

<script>
export default {
    name:'Info',
}
</script>