<template>
  <v-app style="">
    <v-row no-gutters>
      <v-col cols="12" sm="2">
        <filtro></filtro>
      </v-col>
      <v-col cols="12" sm="9">
        <v-row>
          <v-col cols="12" sm="12">
            <h1>Filtros</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12">
            <cards id="cards"></cards>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    
  </v-app>
</template>

<script>
  //import Listar from '../components/Listar.vue'
  import Filtro from '../components/home/Filtro.vue'
  import Cards from '../components/home/Cards.vue'

  export default {
    name: 'Home',

    components: {
     // Listar,
      Filtro,
      Cards,
    },
  }
</script>
<style >
  #cards{
    margin-top: 15px;
    margin-left: 7px;
    float: left;
  }
</style>
