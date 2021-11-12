<template>
    <div>
        <v-form ref="form" lazy-validation>
            <v-text-field label="Marca"  hide-details="auto" v-model="marca"></v-text-field>
            <v-text-field label="Modelo" hide-details="auto" v-model="modelo"></v-text-field>
            <v-text-field label="Precio" hide-details="auto" v-model="precio"></v-text-field>
        
            <v-btn
            depressed
            color="primary"
            @click="insert"
            >
            Enviar
            </v-btn>
        </v-form>
    </div>
</template>

<script>
import {db} from '../db'
    export default {
        name: 'Agregar',

        data() {
            return {
                marca:"",
                modelo:"",
                precio:null,
            }
        },
        methods: {
            insert(){
                var nuevo ={
                    marca:this.marca,
                    modelo:this.modelo,
                    precio:this.precio
                }
                db.collection("cellphone").add(nuevo);
                this.marca ="";
                this.modelo="";
                this.precio =null;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>