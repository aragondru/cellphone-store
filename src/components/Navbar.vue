  <template>
    <div>
        <v-app-bar app flat fixed dark style="background-color: #001526;">
          <v-app-bar-nav-icon class="d-flex d-sm-none"></v-app-bar-nav-icon>

          <v-toolbar-title class="d-none d-sm-flex" style="cursor:pointer;" :to="`/`">
            <v-icon>mdi-bullhorn</v-icon>
            Tienda Cellphone
          </v-toolbar-title>

          <v-spacer></v-spacer>
          <v-text-field
              height="5px"
              filled
              placeholder="Search"
              clearable
              v-model="cadena"
            ></v-text-field>
            <v-btn 
            icon
            @click="buscar"
            >
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
          <v-spacer></v-spacer>
          <v-toolbar-items>
              <v-btn
              text
              class="text-capitalize mr-2 d-none d-sm-flex"
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
                cadena:'',
          }
        },
        methods: {
         emitVisible() {
           eventBus.$emit('showModal',true)
         },
         buscar(){
           if (this.cadena!=='') {
             eventBus.$emit('buscar',this.cadena)
           }
         }
        },
    }
</script>

<style>
.n{
background-color:#2b456e;
}

</style>