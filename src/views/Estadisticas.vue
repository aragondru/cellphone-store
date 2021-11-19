<template>
    <v-row no-gutters>
        <v-col cols="12" sm="6">
            <curvas></curvas>
        </v-col>
        <v-col cols="12" sm="6">

        </v-col>
        <v-col cols="12" sm="6">

        </v-col>
        <v-col cols="12" sm="6">

        </v-col>
    </v-row>
</template>

<script>
import Curvas from '../components/estadisticas/Curvas.vue'
  export default {
      name:'Estadisticas',
      components: {
          Curvas,
      },
  }
</script>

<style>

</style>