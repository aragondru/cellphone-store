<template>
        <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        style="overflow-y: auto;"
        permanent
        class="d-none d-sm-flex d-sm-none d-md-flex"
        >
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                </v-list-item-avatar>

                <v-list-item-title>John Leider</v-list-item-title>

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
                    label="i.title"
                    color="info"
                    hide-details
                    ></v-checkbox>
                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-navigation-drawer>
</template>

<script>
    export default {
        name:'Filtro',
        data () {
            return {
                drawer: true,
                marcas: [
                    { title: 'Xiaomi'},
                    { title: 'Samsung'},
                    { title: 'Iphone'},
                    {title: 'Huawei'},
                    {title:'LG'}
                ],
                system:[
                    {title:'Android'},
                    {title:'IOS'},
                    {title:'Windows phone'},
                ],
                screen:[
                    {tamanio:5.0},
                    {tamanio:6.0}
                ],

                mini: false,
            }
        },
    }
</script>

<style>

</style>