<template>
<v-row>
  <v-col 
    cols="12" 
    sm="3" 
    v-for="(anuncio,key) in filtro"
    :key="key"
  >
    <v-card
      class="mx-auto"
      max-width="400"
      :elevation="20"
    >
      <v-img
        class="dark--text align-end"
        height="200px"
        :src="`${anuncio.foto}`"
      >
        <v-card-title></v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">
        <strong>{{anuncio.titulo}}</strong>
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div><strong>${{anuncio.precio}}</strong> </div>
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="orange"
          text
        >
          Share
        </v-btn>

        <v-btn
          color="orange"
          text
        >
          Explore
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</v-row>
  
</template>
<script>
import {db} from '../../db'
import { eventBus } from '../../main';
  export default {
      name:'Cards',
    data: () => ({
      show: false,
      anuncios:[],
      filtro:[],
      filterList:[]
    }),
    firestore:{
        anuncios:db.collection('anuncio')
    },
    methods: {
        filtrar(cadena){
            this.filtro=this.anuncios
            if(cadena){
                this.filterList=[];
                let listTemp=[];
                for (let i = 0; i < cadena.length; i++) {
                    this.filtro=this.anuncios.filter((a)=> a.id_marca==cadena[i])

                    listTemp = this.filterList.concat(this.filtro);
                    this.filterList=listTemp;
                    this.filtro=this.anuncios.filter((a)=> a.sistema==cadena[i])

                    listTemp=this.filterList.concat(this.filtro);
                    this.filterList=listTemp;
                    this.filtro=this.anuncios.filter((a)=> a.pantalla==cadena[i])
                    listTemp=this.filterList.concat(this.filtro);
                    this.filterList=listTemp;                    
                }

                this.filtro = this.filterList
            }

        },
        ordenarFecha(ascFecha){
          this.filtro.sort((a,b)=>{
            var retorno=1;
            if (a.fecha>b.fecha)
              retorno=1
            else if(a.fecha<b.fecha)
                  retorno=-1
            if(!ascFecha)
              retorno=retorno*-1
            
            return retorno;
          })
        },
        ordenarPrecio(ascPrecio){
          this.filtro.sort((a,b)=>{
            var retorno=1;
            if (a.precio>b.precio)
              retorno=1
            else if(a.precio<b.precio)
                  retorno=-1
            if(!ascPrecio)
              retorno=retorno*-1
            
            return retorno;
          })
        },
        buscar(cadena){
          this.filtro=this.anuncios
          this.filtro=this.anuncios.filter((a)=>
          a.sistema==cadena || a.titulo==cadena
          )

        }
    },
    mounted(){
        this.filtro=this.anuncios
        eventBus.$on('filtrosL',(data)=>{
            this.filtrar(data)
        })

        eventBus.$on('ordenarF',(ascFecha)=>{
          this.ordenarFecha(ascFecha)
        })

        eventBus.$on('ordenarP',(ascPrecio)=>{
          this.ordenarPrecio(ascPrecio)
        })
        eventBus.$on('buscar',(data)=>{
          this.buscar(data)
        })
    },
  }
</script>