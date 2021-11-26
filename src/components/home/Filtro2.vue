<template>
    <div style="margin-left:15px; margin-top:15px;">
        Ordenar por precio:
        <v-row>
            <v-col
                cols="12"
                sm="6"
            >
            <v-row>
                <v-col
                cols="5"
                sm="2"
                md="4"
                >
                    <v-text-field
                        label="Desde"
                        placeholder="Desde"
                        outlined
                        type="number"
                        step="0.01"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="5"
                    sm="2"
                    md="4"
                >
                    <v-text-field
                        label="Hasta"
                        placeholder="Hasta"
                        outlined
                        type="number"
                        step="0.01"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-btn
                        color="success"
                        fab
                        
                        @click="ordenarPrecio"
                    >
                        <v-icon left v-if="ascPrecio">
                            mdi-arrow-up
                        </v-icon>
                        <v-icon left v-else>
                            mdi-arrow-down
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            </v-col>
            <v-col
                cols="12"       
                sm="6"
            >
            <div >
                Ordenar por Fecha:
                <v-btn
                        color="success"
                        fab
                        @click="ordenarFecha"
                    >
                        <v-icon left v-if="ascFecha">
                            mdi-arrow-up
                        </v-icon>
                        <v-icon left v-else>
                            mdi-arrow-down
                        </v-icon>
                    </v-btn>
            </div>
            </v-col>
        </v-row>
        
        <v-row>
            
        </v-row>

    </div>
</template>

<script>
import {eventBus} from '../../main'
    export default {
        name:'Filtro2',
        data() {
            return {
                ascPrecio:true,
                ascFecha:true
            }
        },
        methods: {
            ordenarPrecio(){
                this.ascPrecio=!this.ascPrecio;
                eventBus.$emit('ordenarP',this.ascPrecio)
            },
            ordenarFecha(){
                this.ascFecha=!this.ascFecha;
                eventBus.$emit('ordenarF',this.ascFecha)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>