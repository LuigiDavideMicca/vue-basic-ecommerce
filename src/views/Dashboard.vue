<template>
    <div class="dashboard">
    <v-content class="ml-10" style="width: 1500px">
      <v-row class="pl-3">
        <v-col md="8">
          <p class="display-1 py-3 red--text text--darken-2">Pagina Dashboard - Ordini</p>
          <v-spacer></v-spacer>
          <p class="title py-1 font-weight-regular">In questa Pagina è possibile visualizzare e rimuovere gli ordini presenti.<br>Ogni ordine qua riportato necessita di essere approvao e ricontattare il cliente.</p>
          <v-spacer></v-spacer>
        </v-col>
        <v-col md="4" class="pl-4 my-5">
          <v-img
            src="../assets/order.svg"
            aspect-ratio="1"
            max-width="500"
            max-height="300"
         ></v-img>
        </v-col>
      </v-row>
        <v-row justify="center">
            <v-col md="4" v-for="product in displayedProducts" :key="product.orderProductName">
                <v-card
                max-width="400"
                >
                <v-card-title>
                    Nominativo Richiedente:
                {{ product.orderName }}
                </v-card-title>
                <v-spacer></v-spacer>
                <v-card-subtitle>
                    <p>Email Richiedente:</p>
                   <p>{{ product.orderEmail }}</p>
                </v-card-subtitle>
                <v-card-text>
               <div><p> Totale Ordine: </p><p>{{ product.orderPrice }}</p> </div>
               <p class="text--primary">
                    Articoli: <br>
                {{ product.orderProductName }}
               </p>
               <div class="text--primary">
                    Dettagli ordine: <br>
                {{ product.orderDetails }}
              </div>
              </v-card-text>
                <v-btn
                 color="#e27e71"
                 text
                @click="deleteProduct(product.id)"
                >
                Emilina Ordine
               </v-btn>
                <v-card-actions>
                </v-card-actions>
            </v-card>
       </v-col>
    </v-row>
      <v-pagination
        v-model="page"
        :length="pages.slice(page-1, page+5)"
        :total-visible="5"
        color="red darken-2"
        dark
        >
    </v-pagination>
  </v-content>
    </div>
</template>

<script>
import {db} from '@/main';

export default {
    name:'dashboard',
  data() {
      return {
    product: { 
        orderProductName: null,
        orderName: null,
        orderDetails: null,
        orderEmail: null,
        orderPrice: null
       },
      page: 1,
      perPage: 3,
      pages: [],
      products: [],
      }
  },
    mounted() {
    this.getEvents();
  },
  computed: {
    displayedProducts () {
      return this.paginate(this.products);
    }
  },
  methods: {
    async getEvents() {
      let snapshot = await db.collection('LumenOrders').get();
      let products = [];
      snapshot.forEach(doc => {
        let appData = doc.data();
        appData.id = doc.id;
        products.push(appData);
      });
      this.products = products;
    },
    deleteProduct(doc) {
      if (confirm('Sei sicuro di elimare il Prodotto?')) {
        db.collection("LumenOrders").doc(doc).delete().then(function() {
          this.$swal("Ordine eliminato con successo","Puoi procedere nella navigazione", "success");
        }).catch(function() {
          this.$swal('Errore nella rimozione del oggetto', "Riproprovare prego",
            "error")
        })
      }else {
        this.$swal('Operazione annullata con successo', "Puoi procedere nella navigazione", "error");
      }
      this.getEvents();
    },
    setPages () {
      let numberOfPages = Math.ceil(this.products.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate (products) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return  products.slice(from, to);
    }
  },
  watch: {
    products () {
      this.setPages();
    }
  }
}
</script>