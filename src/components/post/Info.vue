<template>
    <v-container>
        <div v-for="(anuncio,key) in anuncios" :key="key">
            <v-row v-if="anuncio.id== $route.params.id">
                <v-col cols="12" sm="4">
                    <v-card
                        class="mx-auto my-12"
                        max-width="374"
                        elevation="20"
                    >

                        <v-img
                        height="250"
                        :src="`${anuncio.foto}`"
                        ></v-img>

                        <v-card-title>{{anuncio.id_marca}} - {{anuncio.id_modelo}}</v-card-title>

                        <v-card-text>
                        <v-row
                            align="center"
                            class="mx-0"
                        >
                            <v-rating
                            :value="4.5"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="14"
                            ></v-rating>

                            <div class="grey--text ms-4">
                            4.5 (413)
                            </div>
                        </v-row>
                        </v-card-text>

                        <v-divider class="mx-4"></v-divider>
                        <v-card-actions>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="8">
                    <v-card
                      elevation="10"
                      class="mx-auto my-12"
                    >
                    <v-card-title>{{anuncio.titulo}}</v-card-title>
                    <v-spacer></v-spacer>
                    <hr>
                    <v-card-text>
                        {{anuncio.descripcion}}
                    </v-card-text>
                    <v-card-text>
                        <h1 align="center">$ {{anuncio.precio}}</h1>
                    </v-card-text>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-text>
                        <div elevation="25" align="center">
                            <p> <strong>Vendedor</strong>: {{anuncio.vendedor}}</p>
                        </div>
                    </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row v-if="anuncio.id== $route.params.id" elevation="15">
                <v-col cols="12" sm="12">
                    <v-card
                      elevation="10"
                      class="mx-auto my-12"
                    >
                    <v-card-title>Descripción</v-card-title>
                    <v-divider class="mx-4"></v-divider>
                    <v-spacer></v-spacer>
                    <hr>
                    <v-card-text>
                        {{anuncio.descripcion}}
                    </v-card-text>
                    <v-card-text>
                        <v-list dense>
                            <v-subheader>Especificaciones</v-subheader>
                            <v-list-item-group
                                color="primary"
                            >
                                <v-list-item
                                >
                                    <v-list-item-icon>
                                        <v-icon >mdi-cog</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title >Estado: <span class="text-capitalize">{{anuncio.estado}}</span></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item
                                >
                                    <v-list-item-icon>
                                        <v-icon >mdi-tablet-cellphone</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title >Marca: <span class="text-capitalize">{{anuncio.id_marca}}</span></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item
                                >
                                    <v-list-item-icon>
                                        <v-icon >mdi-cellphone</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title >Modelo: <span class="text-capitalize">{{anuncio.id_modelo}}</span></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item
                                >
                                    <v-list-item-icon>
                                        <v-icon >mdi-fullscreen</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title >Pantalla: <span class="text-capitalize">{{anuncio.pantalla}} pulgadas</span></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item
                                >
                                    <v-list-item-icon>
                                        <v-icon >mdi-sitemap</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title >Sistema: <span class="text-capitalize">{{anuncio.sistema}}</span></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item
                                >
                                    <v-list-item-icon>
                                        <v-icon >mdi-sd</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title >Rom: <span class="text-capitalize">{{anuncio.rom}}GB</span></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item
                                >
                                    <v-list-item-icon>
                                        <v-icon >mdi-memory</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title >RAM: <span class="text-capitalize">{{anuncio.ram}}GB</span></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>

                            </v-list-item-group>
                        </v-list>
                    </v-card-text>
                    </v-card>
                </v-col>
            </v-row>


        </div>
    </v-container>
    
</template>

<script>
import {db} from '../../db'
import {eventBus} from '../../main'
    export default {
        name:'Info',
        data() {
            return {
                anuncio:{},
                anuncios:[],
                id:null,
            }
        },
        methods: {
            getAnuncio(data){
                
               console.log(data.titulo);
            }
        },
        // firestore:{
        //     anuncio: db.collection('anuncio').doc(this.id).get().then(
        //             data =>{
        //                 const documento= data.data();
        //                 return documento
        //             })
        // },
        mounted(){
            eventBus.$on('anuncioM',(data)=>{
                this.anuncio=data
                this.getAnuncio(data)
            })
        },
        firestore:{
            anuncios:db.collection('anuncio')
        }
        
    }
</script>