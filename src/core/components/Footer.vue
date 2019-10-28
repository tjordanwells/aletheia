<template>
  <v-footer
    dark
    padless
  >
  <v-container fluid class="ma-0 pa-0">
    <v-card
      flat
      tile
      class="blue-grey lighten-3 white--text text-center py-4"
    >
      <v-card-actions xs12 class="justify-center">
        <v-layout row wrap>
          <v-flex xs12 md6 lg3>
            <v-btn class="mx-12" text to="/about">About</v-btn>
          </v-flex>
          <v-flex xs12 md6 lg3>
            <v-btn class="mx-12" text to="/sermons">Sermons</v-btn>
          </v-flex>
          <v-flex xs12 md6 lg3>
            <v-btn class="mx-12" text to="/give">Give</v-btn>
          </v-flex>
          <v-flex xs12 md6 lg3>
            <v-btn class="mx-12" text to="/contact">Contact</v-btn>
          </v-flex>
        </v-layout>
      </v-card-actions>
      <v-flex></v-flex>
      <v-divider />
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Aletheia Fellowship</strong>
      </v-card-text>
    </v-card>
  </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-instagram'
    ],
  }),
}
</script>
