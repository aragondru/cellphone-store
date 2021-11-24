<template>
  <div class="text-center">
    <v-dialog
      width="500"
      v-model="dialog"
      transition="dialog-bottom-transition"
      persistent
    >

      <v-card >
        <v-card-title class="text-h6 font-weight-regular white--text justify-space-between" style="background-color:#2b456e;">
          <span class="text-caption white--text text--darken-1">
                Nuevo anuncio
          </span>
          <v-spacer></v-spacer>
          <span>{{ currentTitle }}</span>
          <v-spacer></v-spacer>
          <v-avatar
            color="success"
            class="subheading white--text"
            size="24"
            v-text="step"
          ></v-avatar>
        </v-card-title>

        <v-window v-model="step">
          <v-window-item :value="1">
            <v-card-text>
              <v-text-field
                label="Email"
                value="john@vuetifyjs.com"
              ></v-text-field>
              <span class="text-caption grey--text text--darken-1">
                This is the email you will use to login to your Vuetify account
              </span>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="2">
            <v-card-text>
              <v-text-field
                label="Password"
                type="password"
              ></v-text-field>
              <v-text-field
                label="Confirm Password"
                type="password"
              ></v-text-field>
              <span class="text-caption grey--text text--darken-1">
                Please enter a password for your account
              </span>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="3">
            <div class="pa-4 text-center">
              <v-img
                class="mb-4"
                contain
                height="128"
                src="https://cdn.vuetifyjs.com/images/logos/v.svg"
              ></v-img>
              <h3 class="text-h6 font-weight-light mb-2">
                Welcome to Vuetify
              </h3>
              <span class="text-caption grey--text">Thanks for signing up!</span>
            </div>
          </v-window-item>
        </v-window>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            v-show="step !== 1"
            text
            @click="step--"
          >
            Back
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            text
            color="blue-grey"
            @click="modalR"
          >
            Cancel
          </v-btn>
          <v-btn
            v-show="step !== 3"
            color="primary"
            depressed
            @click="step++"
          >
            Next
          </v-btn>
          <v-btn
            v-show="step === 3"
            color="success"
            depressed
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {eventBus} from '../main'
  export default {
    data () {
      return {
        dialog: false,
        step:1,
      }
    },
    methods: {
        modalR(){
          this.step=1;
          this.dialog=false;

        }
    },
    mounted(){
        eventBus.$on('showModal',(data)=>{
            this.dialog=data;
        })
    },
    computed:{
      currentTitle () {
        switch (this.step) {
          case 1: return 'Vendedor'
          case 2: return 'Telefono'
          default: return 'Upload picture'
        }
      },
    },
    destroyed(){
        eventBus.$off('showModal');
    }
  }
</script>

<style lang="scss" scoped>
.nose{
  background-color:#3d587e;
}
</style>