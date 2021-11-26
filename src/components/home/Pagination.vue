<template>
    <v-row v-show="true">
        <v-col cols="12" sm="6">
            <div class="text-center">
                <v-pagination
                v-model="page"
                :length="4"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
                ></v-pagination>
            </div>
        </v-col>
        <v-col cols="12" sm="3" class="d-none d-sm-flex">
            <v-select
            :items="items"
            label="Card por pagina"
            solo
            ></v-select>
        </v-col>
    </v-row>        
</template>
<script>
  export default {
      name:'Pagination',
    data () {
      return {
        page: 1,
        items:[4,8,12,16,20,24]
      }
    },
  }
</script>