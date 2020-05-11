<template>
    <div class="add-to-cart">
    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="1000"
      
    >
      <template v-slot:activator="{ on }">
        <v-btn
          outlined large color="green darken-3"
          v-on="on"
        >
          Conferma Ordine
        </v-btn>
      </template>

      <v-card style="overflow-x:hidden;">
        <v-card-title
          class="headline black white--text"
          primary-title
          dark
        >
          Conferma Ordine
          <v-spacer></v-spacer>
          <v-btn class="headline white--text" icon @click="dialog = false">
            X
          </v-btn>
        </v-card-title>
        <v-form 
          method="post"
          name="Ordini"
          data-netlify="true"
          data-netlify-honeypot="bot-field" @submit.prevent="confirmOrder">
        <v-container>
        <v-row v-for="item in this.$store.state.cart" :key="item.productID">
          <input type="hidden" name="form-name" value="Ordini" />
        <v-list-item five-line >
              <v-list-item-content>
                <v-select 
                class="headline mb-1" 
                v-model="orderProductName" 
                dense outlined 
                :items="item.productName" 
                label="Confermare Prodotto"
                name="Nome Prodotto"
                color="black">
                </v-select>
                <v-list-item-subtitle>€ {{item.productPrice}}</v-list-item-subtitle>
              </v-list-item-content> 
            </v-list-item>
        </v-row>
        <v-text-field outlined v-model="orderName" color="black" type="text" name="Nominativo Richiedente" label="Nominativo Richiedente" required></v-text-field>
        <v-text-field outlined v-model="orderEmail" color="black" type="email" name="Email Richiedente" label="Email Richiedente (obbligatoria)" required></v-text-field>
        <v-textarea outlined v-model="orderDetails" color="black" name="Note Ordine" type="text" label="Note"></v-textarea>
        </v-container>
        <v-card-actions>
        <v-select class="title" 
        v-model="orderPrice"
        dense outlined
        :items="`€ ${this.$store.getters.totalPrice}`"
        label="Confermare Prezzo: "
        name="Prezzo"
        color="black">
        </v-select>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-3"
            class="mr-5 px-5"
            text large
            type="submit"
          >
            Conferma Ordine
          </v-btn>
        </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
  </div>
</template>

<script>
import {db} from '@/main';
export default {
  name: 'SendOrder',
  props: {
    name: String,
    price: String,
    productId: String,
    mainpic: String
  },
  data() {
      return {
        order: {
            orderProductName: null,
            orderName: null,
            orderDetails: null,
            orderEmail: null,
            orderPrice: null
        },
        dialog: false
      }
  },
  methods: {
      async confirmOrder() {
      if(this.orderName && this.orderEmail) {
        await db.collection('LumenOrders').add({
          orderName: this.orderName,
          orderDetails: this.orderDetails,
          orderProductName: this.orderProductName,
          orderEmail: this.orderEmail,
          orderPrice: this.orderPrice,
        })
        this.dialog =! this.dialog;
        this.$swal("Ordine Inviato!!", "Sarai rincontattato al più presto per procedere alle specifiche dell'ordinativo!", "success")
      } else {
        this.$swal("Errore nell'Ordine", "Assicurati che tutti i campi siano compilati correttamente", "error")
      }

      }
  }
    };
</script>
