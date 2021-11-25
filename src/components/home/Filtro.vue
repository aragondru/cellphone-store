<template>
        <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        style="overflow-y: auto;"
        permanent
        class="d-none d-sm-flex d-sm-none d-md-flex"
        >
            <v-list-item class="px-2">

                <v-list-item>
                    <v-switch
                    label="Nuevo"
                    color="primary"
                    value="primary"
                    hide-details
                    ></v-switch>
                </v-list-item>

                <v-btn
                icon
                @click.stop="mini = !mini"
                >
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-list-item>

            <v-divider></v-divider>

            <v-expansion-panels>
                <v-expansion-panel>
                <v-expansion-panel-header>
                    Marcas
                </v-expansion-panel-header>
                <v-expansion-panel-content v-for="(i,key) in marcas" :key="key">
                    <v-checkbox
                    :label="`${i.marca}`"
                    color="info"
                    hide-details
                    ></v-checkbox>
                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels>
                <v-expansion-panel>
                <v-expansion-panel-header>
                    Sistema
                </v-expansion-panel-header>
                <v-expansion-panel-content v-for="(i,key) in system" :key="key">
                    <v-checkbox
                    :label="`${i}`"
                    color="info"
                    hide-details
                    ></v-checkbox>
                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels>
                <v-expansion-panel>
                <v-expansion-panel-header>
                    Pantalla
                </v-expansion-panel-header>
                <v-expansion-panel-content v-for="(i,key) in screen" :key="key">
                    <v-checkbox
                    :label="`${i}`"
                    color="info"
                    :value="`${i}`"
                    hide-details
                    ></v-checkbox>
                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-navigation-drawer>
</template>

<script>
import {db} from '../../db'
    export default {
        name:'Filtro',
        data () {
            return {
                drawer: true,
                marcas: [],
                system:["Android","IOS","Windows","Otro"],
                screen:[7,6,5],

                mini: false,
            }
        },
        firestore:{
            marcas: db.collection('marca')
        },
    }
</script>

<style>

</style>