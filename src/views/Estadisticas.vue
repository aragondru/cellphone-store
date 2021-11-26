<template>
    <v-row no-gutters style="margin-top:10px;">
        <v-col cols="12" sm="6" style="margin-top:5px;">
            <curvas></curvas>
        </v-col>
        <v-col cols="12" sm="6" style="margin-top:5px;">
            <curvas></curvas>
        </v-col>
        <v-col cols="12" sm="6" style="margin-top:10px;">
            <curvas></curvas>
        </v-col>
        <v-col cols="12" sm="6" style="margin-top:10px;">
            <curvas></curvas>
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