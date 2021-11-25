<template>
<v-app>
    <v-card
    max-width="344"
    v-for="(anuncio,key) in anuncios"
    :key="key"
    dark
  >
    <v-img
      :src="`${anuncio.foto}`"
      height="200px"
      width="300px"
    ></v-img>

    <v-card-title>
      {{anuncio.titulo}}
    </v-card-title>

    <v-card-subtitle>
      <strong>Precio: ${{anuncio.precio}}</strong>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{anuncio.descripcion}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</v-app>
  
</template>
<script>
import {db} from '../../db'
  export default {
      name:'Cards',
    data: () => ({
      show: false,
      anuncios:[],
    }),
    firestore:{
        anuncios:db.collection('anuncio')
    }
  }
</script>