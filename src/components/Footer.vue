<template>
  <v-footer
    dark
    padless
    style="width:auto;"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title style="background-color:#102b50;">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center" style="background-color:#183052;">
        {{ new Date().getFullYear() }} — <strong>Cellphone Store</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style lang="scss" scoped>
.nose{
  background-color:#183052;
}
</style>