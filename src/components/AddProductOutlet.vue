<template>
    <div class="AddProductOutlet">
          <v-btn color="#6c63ff" class="mr-4 mt-4" @click="selectedOpen === false, dialog = true" dark>
            Nuovo Prodotto
         </v-btn>
            <v-dialog v-model="dialog" max-width="1500px">
            <v-card>
                <v-toolbar
                color="#6c63ff"
                dark
                flat
                >
                <v-toolbar-title>Aggiungi un Elemento</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn text icon color="orange accent-3" @click="dialog=false">
                   <v-icon>mdi-delete</v-icon>
                 </v-btn>
                </v-toolbar>
                <v-container>
                <v-form @submit.prevent="addEvent">
                  <v-row>
                    <v-col md="8">
                      <v-text-field outlined v-model="name" type="text" label="Titolo Articolo (obbligatorio)"></v-text-field>
                    </v-col>
                    <v-col md="4">
                      <v-text-field outlined v-model="price" type="number" label="Prezzo Articolo (obbligatorio)"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col md="8">
                      <vue-editor v-model="details"></vue-editor>
                    </v-col>
                    <v-col md="4">
                      <v-text-field outlined v-model="mainpic" type="url" label="Immagine (obbligatoria)"></v-text-field>
                      <v-text-field outlined v-model="secondarypic" type="url" label="Immagine (secondaria)"></v-text-field>
                      <v-text-field outlined v-model="thirdarypic" type="url" label="Immagine (terziaria)"></v-text-field>
                    </v-col>
                  </v-row>
                    <br>
                    <v-row align="center" justify="center">
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn type="submit" color="green accent-4" class="mr-4" @click.stop="dialog=false" dark>Crea Elemento</v-btn>
                    </v-card-actions>
                    </v-row>
                </v-form>
                </v-container>  
            </v-card>
            </v-dialog>
    </div>

    
</template>

<script>
import {VueEditor} from 'vue2-editor';
import {db} from '@/main';
export default {
    name:'AddProductOutlet',
    components: {
      VueEditor
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
    products: [],
    dialog: false,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,

  }),
  methods: {
    async addEvent() {
      if(this.name && this.mainpic && this.price) {
        await db.collection('LumenOutlet').add({
          name: this.name,
          details: this.details,
          mainpic: this.mainpic,
          secondarypic: this.secondarypic,
          thirdarypic: this.thirdarypic,
          price: this.price,
        });
        this.name = "";
        this.details = "";
        this.mainpic = "";
        this.price = "";
      } else {
        this.$swal('Attenzione','Titolo, prezzo ed immagine sono campi obbligatori!', "error")
      }
    },
  }
}
</script>