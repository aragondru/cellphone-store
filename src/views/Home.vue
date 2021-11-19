<template>
  <v-app style="">
    <v-row no-gutters>
      <v-col cols="12" sm="2">
        <filtro></filtro>
      </v-col>
      <v-col cols="12" sm="9" style="margin-left:15px;">
        <listar></listar>
      </v-col>
    </v-row>
    
  </v-app>
</template>

<script>
  import Listar from '../components/Listar.vue'
  import Filtro from '../components/home/Filtro.vue'

  export default {
    name: 'Home',

    components: {
      Listar,
      Filtro,
    },
  }
</script>
