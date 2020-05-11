<template>
<div class="prodotti">
    <v-content class="ml-10" style="width: 1500px">
      <v-row class="pl-3">
        <v-col md="8">
          <p class="display-1 py-3 red--text text--darken-2 py-3">Pagina Prodotti Multimarca</p>
          <v-spacer></v-spacer>
          <p class="title py-1 font-weight-regular">In questa Pagina è possibile aggiungere e modificare i prodotti presenti nell' E-Commerce.<br>Ogni prodotto qua riportato verrà mostrato nella pagina accessibile a tutti <i>"Multimarca"</i>.</p>
          <v-spacer></v-spacer>
          <AddProductOutlet></AddProductOutlet>
        </v-col>
        <v-col md="4" class="pl-4">
          <v-img
            src="../assets/product-2.svg"
            aspect-ratio="1"
            max-width="500"
            max-height="400"
         ></v-img>
        </v-col>
      </v-row>
        <v-simple-table class="pl-3">
        <template v-slot:default>
        <thead>
            <tr>
            <th class="text-left">Nome</th>
            <th class="text-left">Dettagli</th>
            <th class="text-left">Prezzo</th>
            <th class="text-left">Immagine</th>
            <th class="text-left">Azioni</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in displayedProducts" :key="product.name">
            <td>{{ product.name }}</td>
            <td v-html="product.details">{{ product.details }}</td>
            <td>€ {{ product.price }}</td>
            <td><img :src="product.mainpic" style="height:4em;"></td>
            <td>
            <v-btn color="#e27e71" dark @click="deleteProduct(product.id)">Elimina</v-btn>
            </td>
            </tr>
        </tbody>
        </template>
    </v-simple-table>
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
import AddProductOutlet from '../components/AddProductOutlet.vue'

export default {
    name:'prodotti',
    components: {
      AddProductOutlet
    },
    data: () => ({
    product: { 
        name: null,
        details: null,
        mainpic: null,
        price: null,
        secondarypic: null,
        thirdarypic: null        
    },
    page: 1,
    perPage: 4,
    pages: [],
    products: [],
    dialog: false,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
  }),
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
      let snapshot = await db.collection('LumenOutlet').get();
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
        db.collection("LumenOutlet").doc(doc).delete().then(function() {
          this.$swal("Prodotto eliminato con successo","Puoi procedere nella navigazione", "success");
        }).catch(function() {
          this.$swal('Errore nella rimozione del prodotto', "Riproprovare prego",
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