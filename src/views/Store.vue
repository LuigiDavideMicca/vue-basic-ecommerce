<template>
<div class="store">
  <NavBar></NavBar>
        <v-parallax
            dark
            src="https://images.pexels.com/photos/905689/pexels-photo-905689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        >
            <v-row
            align="center"
            justify="center"
            >
            <v-col class="text-center" cols="12">
                <h1 class="display-1 font-weight-regular mb-4 mr-10 red--text" style="text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;">Lumen Mec</h1>
                <h4 class="subheading mr-10" style="text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;">LA NOSTRA PRODUZIONE</h4>
            </v-col>
            </v-row>
        </v-parallax>
        <v-container>
        <v-row justify="center" align="center">
          <v-card class="my-10 px-5" dark>
          <h4 class="headline font-weight-regular text-center mt-5 mb-5 red--text text--darken-2">
            La nostra produzione dal 1977 rispetta gli standard del <b>MADE IN ITALY</b> per il cliente.
          </h4>
          <br>
          <p class="subtitle-1 font-weight-regular text-center mb-5">
            I nostri prodotti ricomprendono tutti i campi dell'illuminazione, dai lampadari alle lampade alla apliques, etc.
            Stili Classici o Moderni o anche più particolareggiati per essere sempre vicini alle esigenze del cliente.<br><br>
            Oltre a quanto qua riportato siamo sempre disponibili a realizzare lampadari su misura e con disegni ideati dal proponente.
          </p>
          </v-card>
        </v-row>
    </v-container>
    <SeeCart
      :product-id="product.id" 
      :price="product.price"
      :name="product.name"
      :mainpic="product.mainpic">
    </SeeCart>  
    <v-container>
      <v-col class="mx-8 my-10" cols="12" sm="6" justify="center">
            <p class="display-1 font-weight-light text-center red--text text--darken-2 mt-10 mb-5">
              Ricerca i prodotti          
            </p>
        <v-text-field prepend-icon="fas fa-search" outlined v-model="searchProduct" type="search" color="red darken-2" label="Digita il nome del prodotto che vuoi ricercare"></v-text-field>      
      </v-col>
        <p class="display-2 font-weight-medium text-center red--text text--darken-2 my-10">
          Elenco Articoli          
        </p>
        <v-row v-if="filteredProducts.length" justify="center" align="center" class="ml-10 py-5 my-10">
            <v-col md="4" v-for="product in filteredProducts" :key="product.name" class="mb-10">
                <v-card
                max-width="400"
                >
                <v-img
                :src="product.mainpic"
                height="300px"
                ></v-img>
                <v-card-title>
                {{ product.name }}
                </v-card-title>
                <v-card-subtitle>
                € {{ product.price }}
                </v-card-subtitle>
                <v-card-actions>
                <ProductDetails
                :product-id="product.id" 
                :price="product.price"
                :name="product.name"
                :details="product.details"
                :mainpic="product.mainpic"
                :secondarypic="product.secondarypic"
                :thirdarypic="product.thirdarypic"
                class="mx-5">
                </ProductDetails>
                <AddToCart
                :product-id="product.id" 
                :price="product.price"
                :name="product.name"
                :mainpic="product.mainpic">
                </AddToCart>  
                </v-card-actions>
            </v-card>
       </v-col>
    </v-row>
    <v-row v-else>
      <p class="display-1 font-weight-light text-center my-10 mx-10">Non ci sono prodotti che soddisfano i requisiti della ricerca</p>
    </v-row>
    <div class="text-center">
    <v-pagination
        v-model="page"
        :length="pages.slice(page-1, page+5)"
        :total-visible="5"
        color="red darken-2"
        dark
        >
    </v-pagination>
  </div>
  </v-container>
    <LumenFooter></LumenFooter>
</div>
    
</template>

<script>
import NavBar from '../components/NavBar.vue'
import LumenFooter from '../components/LumenFooter.vue'
import AddToCart from '../components/AddToCart.vue'
import ProductDetails from '../components/ProductDetails.vue'
import SeeCart from '../components/SeeCart.vue'
import {db} from '@/main';

export default {
    components: {
      NavBar,
      LumenFooter,
      AddToCart,
      ProductDetails,
      SeeCart
    },
    data: () => ({
    product: { 
        name: null,
        details: null,
        mainpic: null,
        secondarypic: null,
        thirdarypic: null,        
        price: null
    },
    page: 1,
    perPage: 9,
    pages: [],
    selectedElement: null,
    products: [],
    selectedEvent: {},
    selectedOpen: false,
    dialog: null,
    searchProduct:''
  }),
    mounted() {
    this.getEvents();
  },
  computed: {
    displayedProducts () {
      return this.paginate(this.products);
    },
    filteredProducts() {
    const search = this.searchProduct.toLowerCase().trim();
    if (!search) return this.displayedProducts;
    return this.displayedProducts.filter(c => c.name.toLowerCase().indexOf(search) > -1);
   }
  },
  methods: {
    async getEvents() {
      let snapshot = await db.collection('LumenProducts').get();
      let products = [];
      snapshot.forEach(doc => {
        let appData = doc.data();
        appData.id = doc.id;
        products.push(appData);
      });
      this.products = products;
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
