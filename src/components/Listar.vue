<template>
    <div>
        <h2>Hola desde listar</h2>
        <ul>
            <li v-for="(cell,key) in cellphone" :key="key">
                {{cell.marca}}
                <v-btn class="ma-2" color="red" dark small @click="borrar(cell.id)">
                    <v-icon dark left>
                    mdi-delete-outline
                    </v-icon>
                    Eliminar
                </v-btn>
                </li>
        </ul>

        <strong>Agregar nuevo document a cellphone</strong>
        <agregar></agregar>
    </div>
</template>

<script>
import {db} from '../db'
import Agregar from './Agregar.vue'
    export default {
        name: 'Listar',
        components:{Agregar},
        data() {
            return {
                cellphone:[],
            }
        },
        methods: {
          borrar(id){
              console.log(id);
              db.collection('cellphone').doc(id).delete()
          }
        },
        firestore: {
            cellphone: db.collection('cellphone'),
        },
    }
</script>

<style lang="scss" scoped>

</style>