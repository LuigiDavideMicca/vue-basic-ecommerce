<template>
    <div class="productDetails">
<v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn text  v-on="on" @click="selectProduct">Vedi dettagli</v-btn>
      </template>
      <v-card>
        <v-toolbar dark>
          <v-btn icon dark @click="deselectProduct">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Dettagli Articolo</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
          <v-container>
            <h4 class="mb-5 py-4 text-center display-2 red--text text--darken-2" justify="center" >Dettagli Articolo</h4>
            <v-row justify="center" class="mt-10" v-for="product in this.$store.state.selectedProduct" :key="product">
                <v-col md="6">
                        <div>
                            <h5 class="headline font-weight-medium"><b>{{openProduct.selectedProductName}}</b>
                            </h5>
                            <br>
                            <p class="title">€ {{openProduct.selectedProductPrice}}</p>
                            <br>
                            <h5 class="title" v-html="product.selectedProductDetails">{{product.selectedProductDetails}}
                            </h5>
                        </div>
                </v-col>
                <v-col md="4" class="ml-10">
                  <v-img aspect-ratio="1" 
                    max-width="400"
                    max-height="300"
                    style="border-radius:10px;"
                    :src="product.selectedProductMainpic"
                    class="my-5 mx-5"></v-img>
                  <v-img aspect-ratio="1" 
                    max-width="400"
                    max-height="300"
                    style="border-radius:10px;"
                    :src="product.selectedProductSecondarypic"
                    class="my-5 mx-5"></v-img>
                  <v-img aspect-ratio="1" 
                    max-width="400"
                    max-height="300"
                    style="border-radius:10px;"
                    :src="product.selectedProductThirdarypic"
                    class="my-5 mx-5"></v-img>
                </v-col>
            </v-row>
            <v-btn outlined large class="ml-10" @click="deselectProduct" color="orange darken-3">indietro</v-btn>
            </v-container>        
      </v-card>
    </v-dialog>
  </v-row>  
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  props: {
    name: String,
    details: String,
    price: String,
    productId: String,
    mainpic: String,
    secondarypic: String,
    thirdarypic: String
  },
  data() {
      return {
        openProduct: {
          selectedProductName: this.name,
          selectedProductDetails: this.details,
          selectedProductPrice: this.price,
          selectedProductID: this.productId,
          selectedProductMainpic: this.mainpic,
          selectedProductSecondarypic: this.secondarypic,
          selectedProductThirdarypic: this.thirdarypic
        },
        dialog: false
      }
  },
  methods: {
    selectProduct() {
      this.$store.commit('selectProduct', this.openProduct )
    },
    deselectProduct() {
      this.dialog = false;
      this.$store.commit('deselectProduct', this.openProduct);
    }
  }
    };
</script>
