<template>
    <div class="contatti">
        <NavBar></NavBar>
        <v-parallax
            dark
            src="https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        >
            <v-row
            align="center"
            justify="center"
            >
            <v-col class="text-center" cols="12">
                <h1 class="display-1 font-weight-regular mb-4 mr-10 red--text" style="text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;">Lumen Mec</h1>
                <h4 class="subheading mr-10" style="text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;">CONTATTI</h4>
            </v-col>
            </v-row>
        </v-parallax>
        <v-container>
            <v-row align="center" justify="center">
                    <div class="my-10 mx-5 text-center">
                        <p class="display-1 red--text text--darken-2 my-5" style="text-transform: uppercase;">Dove siamo</p> <br>
                        <p class="title font-weight-regular">La nostra azienda si trova a <span class="font-italic font-weight-medium">Zelo Buon Persico (LO), in via Dante 1</span>.<br>
                         Siamo facilmente raggiungibili tramite la T.E.E.M (Tangenziale Est Esterna Milanese), all'uscita Paullo.<br> Oppure percorrendo la SS. 415 (cd. Paullese) tra Milano e Crema. </p>
                    </div>
            </v-row>
            <v-row align="center" justify="center">
                    <div class="my-10 mx-5 text-center">
                        <p class="display-1 red--text text--darken-2 my-5" style="text-transform: uppercase;">I nostri orari</p> <br>
                        <p class="title font-weight-regular">Siamo sempre aperti dal lunedì al venerdì dalle ore <span class="font-italic font-weight-medium">8.30 alle ore 17.30</span>.<br>
                         E' necessario prendere un appuntamento telefonico o tramite e-mail.</p>
                    </div>
            </v-row>
            <v-row align="center" justify="center">
                    <div class="my-10 mx-5 text-center">
                        <p class="display-1 red--text text--darken-2 my-5" style="text-transform: uppercase;">Come contattarci</p> <br>
                        <p class="title font-weight-regular">Siamo sempre disponibili negli orari di apertura ai seguenti recapiti:<br>
                         <span class="font-italic font-weight-medium">Telefono: 02 906 5036 </span><br>
                         <span class="font-italic font-weight-medium">E-mail: info@lumenmec.it</span></p>
                    </div>
            </v-row>
    </v-container>
        <LumenFooter></LumenFooter>
    </div>
    
</template>

<script>
import NavBar from '../components/NavBar.vue'
import LumenFooter from '../components/LumenFooter.vue'
export default {
    components: {
        NavBar,
        LumenFooter
    }
}
</script>