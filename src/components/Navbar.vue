  <template>
    <div>
        <v-app-bar app dense fixed dark style="background-color: #001526;">
        <v-app-bar-nav-icon class="d-flex d-sm-none"></v-app-bar-nav-icon>

        <v-toolbar-title class="d-none d-sm-flex" style="cursor:pointer;">
          <v-icon>mdi-bullhorn</v-icon>
          Tienda Cellphone
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-text-field
          hide-details
          prepend-icon="mdi-magnify"
          single-line
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn
            text
            class="text-capitalize mr-2 "
            v-show="$vuetify.breakpoint.lgOnly"
            v-for="(item,key) in menuItems"
            :key="key"
            :to="item.to"
            >
               {{item.title}}
            </v-btn>
        </v-toolbar-items>
        <div class="d-none d-sm-flex">
          <v-btn 
          icon
          dark
          small
          fab
          style="background-color:#102b50;"
          @click="emitVisible"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn icon>
              <v-icon>mdi-cart</v-icon>
          </v-btn>
        </div>
        </v-app-bar>
    </div>
</template>

<script>
import {eventBus} from '../main'
    export default {
        name:'Navbar',
        data() {
          return {
            menuItems:[
                    {title:"Inicio",to:'/'},
                    {title:"Estadisticas",to:'/statistics'},
                ],
          }
        },
        methods: {
         emitVisible() {
           eventBus.$emit('showModal',true)
         }
        },
    }
</script>

<style>
.n{
background-color:#2b456e;
}
</style>