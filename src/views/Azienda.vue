<template>
    <div class="azienda">
        <NavBar></NavBar>
        <v-parallax
            dark
            src="https://images.pexels.com/photos/2549057/pexels-photo-2549057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            style="opacity:0.9"
        >
            <v-row
            align="center"
            justify="center"
            >
            <v-col class="text-center" cols="12">
                <h1 class="display-1 font-weight-regular red--text mb-4 mr-10" style="text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;">Lumen Mec</h1>
                <h4 class="heading mr-10" style="text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;text-transform: uppercase;">Un'azienda artigianale dal 1977</h4>
            </v-col>
            </v-row>
        </v-parallax>
        <v-container>
            <v-row align="center" justify="center">
                <v-col md="8" sm="12">
                    <div class="my-5 mx-5">
                        <p class="display-1 red--text text--darken-2 my-5">Per avere successo occorrono dinamismo, serietà e molto impegno.</p> <br>
                        <p class="title font-weight-regular">Queste sono le qualità prime della <b>LUMEN MEC</b>, che dal 1977 crea lampadari in stile classico con ottimi risultati, grazie all’esperienza dei suoi artigiani.<br><br>
                        Ma dietro ad ogni creazione di questa azienda non vi è solo una lunga preparazione, necessaria per ottenere la massima qualità e affidabilità, ma anche una ricerca approfondita tendente a soddisfare nel modo più completo ogni cliente.
                        L’azienda, largamente apprezzata per la tradizionale “collezione STRASS”.<br>
                        caratterizzata da preziose rifiniture in bagno d’oro 24 KT e cristalli Strass Swaroski, aggiunge oggi tre perle d’alto artigianato alla sua collana di proposte.
                        La “collezione CRISTALLO” si impone per l’eleganza delle soluzioni che abbinano la delicatezza del vetro di MURANO allo sfarzo dell’oro e del cristallo. La “collezione ARTE” rivisita lo stile fiorentino con raffinate lavorazioni in ferro battuto arricchite da motivi floreali dipinti a mano con calde tonalità a tempera. Mentre la “collezione CERAMICHE” si distingue per l’eleganza dei modelli e la qualità inconfondibile delle lavorazioni.<br><br>
                        Sempre disponibili a soddisfare qualsiasi richiesta proveniente dal mercato, la LUMEN MEC, progetta e realizza inoltre esclusivi lampadari di qualsiasi dimensione su disegno fornito dal cliente.<br>
                        Gli articoli possono essere ammirati alla <b>fiera di Milano “EUROLUCE”</b> dove la LUMEN MEC è sempre presente all’appuntamento con gli operatori italiani ed esteri.<br><br>
                        <b>LUMEN MEC</b> un’azienda e il suo prodotto.</p>
                    </div>
                </v-col>
                <v-col md="4" sm="12">
                    <v-img
                    src="https://i.imgur.com/FH9VDWQ.jpg"
                    aspect-ratio="1"
                    class="grey lighten-2 my-5 yo"
                    max-width="400"
                    max-height="1100"
                    cover
                    style="border-radius:10px; " 
                    ></v-img>
                </v-col>
            </v-row>
        <GoToStore/>
            <v-row align="center" justify="center"  class="my-10">
                <v-img
                src="https://i.imgur.com/ek0Dyml.jpg"
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="900"
                max-height="500"
                style="border-radius:10px;"
                ></v-img>
            </v-row>        
    </v-container>
        <LumenFooter></LumenFooter>
    </div>
    
</template>

<script>
import NavBar from '../components/NavBar.vue'
import LumenFooter from '../components/LumenFooter.vue'
import GoToStore from '../components/GoToStore.vue'
export default {
    components: {
        NavBar,
        LumenFooter,
        GoToStore
    }
}
</script>

<style scoped>
    @media only screen and (max-width: 650px) {
       .yo {
           margin: 3em auto;
       } 
    }
</style>