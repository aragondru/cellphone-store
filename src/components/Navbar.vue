  <template>
    <div>
        <v-app-bar app flat fixed dark style="background-color: #001526;">
          <v-app-bar-nav-icon class="d-flex d-sm-none" @click="dialog=true"></v-app-bar-nav-icon>

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
          </v-toolbar-items>
          <div class="d-none d-sm-flex">
            <v-btn icon>
                <v-icon>mdi-cart</v-icon>
            </v-btn>
          </div>
        </v-app-bar>
        <v-row justify="center">
          <v-dialog
            v-model="dialog"
            max-width="290"
          >
            <v-card>
              <v-card-title class="text-h5">
                <v-icon>mdi-volume-high</v-icon>
                Tienda Cellphone
                <v-divider></v-divider>
                
              </v-card-title>
              <v-list>
                <v-list-item-group>
                  <v-list-item
                    v-for="(item, i) in menuItems"
                    :key="i"
                  >
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title @click="dialog=false" >
                        <v-btn
                          text
                          color="grey"
                          large
                          :to="`${item.to}`"
                        >
                          {{item.title}}
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-dialog>
        </v-row>
    </div>
</template>

<script>
import {eventBus} from '../main'
    export default {
        name:'Navbar',
        data() {
          return {
            menuItems:[
                    {title:"Inicio",to:'/',icon:'mdi-home'},
                    {title:"Estadisticas",to:'/statistics',icon:'mdi-strategy'},
                ],
                cadena:'',
                drawer: false,
                group: null,
                dialog:false,
          }
        },
        methods: {
         emitVisible() {
           eventBus.$emit('showModal',true)
         },
         buscar(){
           console.log(this.cadena);
           if (this.cadena) {
             eventBus.$emit('buscar',this.cadena)
           }
         }
        },
        watch: {
          group () {
            this.drawer = false
          },
        },
    }
</script>

<style>
.n{
background-color:#2b456e;
}

</style>