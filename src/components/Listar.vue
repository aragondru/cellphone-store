<template>
    <div>
        <h2>Hola desde listar</h2>
        <ul>
            <li v-for="(cell,key) in cellphone" :key="key">{{cell.marca}}</li>
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
        firestore: {
            cellphone: db.collection('cellphone'),
        },
    }
</script>

<style lang="scss" scoped>

</style>