<template>
    <div>
        Hola desde Post
        <info></info>
    </div>
</template>

<script>
import Info from '../components/post/Info.vue'
import {db} from '../db'
    export default {
        name:'Post',
        components: {
            Info,
        },
        data() {
            return {
                anuncios:[]
            }
        },
        firestore:{
            anuncios:db.collection('anuncio')
        }

    }
</script>