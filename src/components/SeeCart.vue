<template>
    <div class="add-to-cart">
    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
      <v-btn class="mx-2" fab dark large v-on="on">
        <v-icon dark>fas fa-shopping-cart</v-icon>
      </v-btn>        
      </template>

      <v-card max-width="600" style="overflow-x:hidden;">
        <v-card-title
          class="headline black white--text"
          primary-title
        >
          Carrello
          <v-spacer></v-spacer>
          <v-btn class="headline white--text" icon @click="dialog = false">
            X
          </v-btn>
        </v-card-title>
        <div v-if="this.$store.state.cart.length">
          <v-row v-for="item in this.$store.state.cart" :key="item.productID">
          <v-list-item five-line >
                <v-list-item-content>
                  <v-list-item-title class="headline ml-5 mx-5">{{item.productName}}</v-list-item-title>
                  <v-list-item-subtitle class="ml-5 mx-3">€ {{item.productPrice}}</v-list-item-subtitle>
                </v-list-item-content> 
              <v-btn icon @click="$store.commit('removeFromCart',item)">
                <v-icon class="mr-7">mdi-delete-outline</v-icon>
              </v-btn>           
              </v-list-item>
          </v-row>          
        </div>
        <p v-else class="headline text-center font-weight-medium my-10">Il carrello è vuoto!</p>
        <v-card-actions>
        <v-list-item-subtitle class="title">€ {{ this.$store.getters.totalPrice}}</v-list-item-subtitle>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-3"
            text
            @click="checkout"
          >
            Procedi al checkout
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </div>
</template>

<script>
export default {
  name: 'AddToCart',
  props: {
    name: String,
    price: String,
    productId: String,
    mainpic: String
  },
  data() {
      return {
        item: {
          productName: this.name,
          productPrice: this.price,
          productID: this.productId,
          productQuantity: 1,
          productMainpic: this.mainpic
        },
        dialog: false
      }
  },
  methods: {
    checkout(){
      this.dialog = false
      this.$router.push('/checkout')  
    }

  }
    };
</script>
