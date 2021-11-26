<template>
    <div style="margin-left:15px; margin-top:15px;">
        
        <v-row>
            <v-col
                cols="12"
                sm="6"
            >
                <div>
                    <v-btn
                        color="success"
                        small                        
                        @click="ordenarPrecio"
                    >
                        <v-icon left v-if="ascPrecio">
                            mdi-arrow-up
                        </v-icon>
                        <v-icon left v-else>
                            mdi-arrow-down
                        </v-icon>
                        Ordenar por precio
                    </v-btn>
                </div>
            </v-col>
            <v-col
                cols="12"       
                sm="6"
            >
            <div >
                <v-btn
                        color="success"
                        small
                        @click="ordenarFecha"
                    >
                        <v-icon left v-if="ascFecha">
                            mdi-arrow-up
                        </v-icon>
                        <v-icon left v-else>
                            mdi-arrow-down
                        </v-icon>
                        Ordenar po fecha
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