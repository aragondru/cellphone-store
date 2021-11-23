<template>
  <v-app>

    <navbar></navbar>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
    <add-new></add-new>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import AddNew from './components/AddNew.vue'

export default {
  name: 'App',
  components:{
    Navbar,
    Footer,
    AddNew,
  },
  data() {
    return {
      visible:false,
    }
  },
};
</script>
