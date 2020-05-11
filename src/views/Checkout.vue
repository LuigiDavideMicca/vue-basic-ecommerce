<template>
    <div class="checkout">
     <NavBar></NavBar>
        <v-parallax
            dark
            src="https://images.pexels.com/photos/2387624/pexels-photo-2387624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            style="opacity:0.9"
        >
            <v-row
            align="center"
            justify="center"
            >
            <v-col class="text-center" cols="12">
                <h1 class="display-1 font-weight-regular red--text mb-4 mr-10" style="text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;">Lumen Mec</h1>
                <h4 class="heading mr-10" style="text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;text-transform: uppercase;">PAGINA DI CHECK OUT</h4>
            </v-col>
            </v-row>
        </v-parallax>
            <v-container>
            <h4 class="my-5 py-5 text-center display-3 font-weight-medium" justify="center">Checkout</h4>
            <h4 class="mx-5 my-5 py-4 title" >Tramite questa pagina è possibile procedere all'ordine.<br><br>E' possibile eliminare o confermare i prodotti. E' necessario poi compilare tutti i campi del form. Verrete rincontattati in breve tempo per procedere con tutte le specifiche dell'ordine e al pagamento.<br><br>NB: data l'altissima customizzazione dei prodotti, e l'importo spesso elevato i pagamenti e le specifiche verrano negoziati ad hoc per ogni cliente a seguito della ricezione dell'ordine.</h4>
            <hr>
            <h4 class="my-10 py-5 text-center display-1 red--text text--darken-2" justify="center" >Prodotti Selezionati</h4>
            <v-row justify="center" v-for="item in this.$store.state.cart" :key="item.productID">
                <v-col md="6">
                    <h4 class="my-5 py-5 headline font-weight-medium">Dettagli Prodotto:</h4>
                        <div class="my-5 mx-5">
                            <ul>
                                <li>
                                    <h5 class="headline mt-5"> Nome Articolo: <span class="font-weight-medium">{{item.productName}}</span></h5>
                                    <p class="title my-5">Prezzo Articolo:<span class="font-weight-medium"> € {{item.productPrice}}</span></p>
                                </li>
                            </ul>
                        </div>
                </v-col>
                <v-col md="4">
                  <v-img aspect-ratio="1" 
                    max-width="300"
                    max-height="200"
                    style="border-radius:10px;"
                    :src="item.productMainpic"
                    class="my-5 py-5"></v-img>
                </v-col>
                <v-col md="2" class="pr-5">
                    <v-btn x-large icon @click="$store.commit('removeFromCart',item)">
                        <v-icon>mdi-delete-outline</v-icon>
                    </v-btn>           
                </v-col>
            </v-row>
            <p class="headline">Totale:<span class="font-weight-medium"> € {{ this.$store.getters.totalPrice}}</span></p>
            <SendOrder></SendOrder>
            </v-container>        
        <LumenFooter></LumenFooter>
    </div>
    
</template>

<script>
import NavBar from '../components/NavBar.vue'
import LumenFooter from '../components/LumenFooter.vue'
import SendOrder from '../components/SendOrder.vue'
export default {
    name: 'Checkout',
    components: {
        NavBar,
        LumenFooter,
        SendOrder
    }
}
</script>
<style scoped>
 body{
     height: 100vh
 }
</style>