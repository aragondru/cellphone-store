  <template>
    <div>
        <v-toolbar dense dark style="background-color: #001526;">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Tienda Cellphone</v-toolbar-title>

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
        <v-btn
                dark
                small
                fab
                style="background-color:#102b50;"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        </v-toolbar>
    </div>
</template>

<script>
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
    }
</script>

<style lang="css" scoped>
</style>