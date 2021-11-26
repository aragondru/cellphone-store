<template>
  <v-app style="">
    <v-row no-gutters>
      <v-col cols="12" sm="2">
        <filtro></filtro>
      </v-col>
      <v-col cols="12" sm="10">
            <filtro2></filtro2>

            <cards id="cards"></cards>
            <br>
            <br>
            <br>
            <pagination></pagination>
      </v-col>
    </v-row>
    
  </v-app>
</template>

<script>
  //import Listar from '../components/Listar.vue'
  import Filtro from '../components/home/Filtro.vue'
  import Cards from '../components/home/Cards.vue'
  import Filtro2 from '../components/home/Filtro2.vue'
  import Pagination from '../components/home/Pagination.vue'

  export default {
    name: 'Home',

    components: {
     // Listar,
      Filtro,
      Cards,
      Filtro2,
      Pagination,
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
