<template>
    <div>
        <h2>Hola desde listar</h2>
        <ul>
            <li v-for="(cell,key) in cellphone" :key="key">{{cell.marca}}</li>
        </ul>
    </div>
</template>

<script>
import {db} from '../db'
    export default {
        name: 'Listar',
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