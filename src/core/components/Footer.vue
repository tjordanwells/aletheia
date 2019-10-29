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
      <v-card-actions xs12 class="justify-center mt-4">
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
      <v-layout row wrap class="justify-space-between">
        <v-flex xs12 md6 lg6>
          <p class="overline mt-8 ml-12 pa-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda inventore, voluptatibus accusamus quidem, aspernatur, nam est eaque animi quia fuga magni. Aut quia vero placeat hic minima asperiores assumenda temporibus!</p>
        </v-flex>
        <v-divider vertical inset></v-divider>
        <v-layout row wrap class="mx-0 px-0">
          <v-flex xs12 md6 class="mt-8 pt-12 text-center">
            <span class="overline">Address</span>
          </v-flex>
          <v-flex xs12 md6 class="overline mt-8 pt-12 text-center">
            <span>3009 Gentle Breezes Lane</span><br>
            <span>Raleigh, North Carolina</span>
          </v-flex>
          <v-flex xs12 md6 class="overline mt-8 pt-12 text-center">
            <span class="overline">Email</span>
          </v-flex>
          <v-flex xs12 md6 class="overline mt-8 pt-12 text-center">
            <span>info@aletheiafellowship.org</span>
          </v-flex>
        </v-layout>
        <!-- <v-flex xs12 md4 lg5 class="overline mt-8 pt-12 text-center">
          <span :class="{'subtitle-2 pr-8': $vuetify.breakpoint. smAndDown, 'float-left subtitle-2': $vuetify.breakpoint. mdAndUp}">Address</span>
          <span>3009 Gentle Breezes Lane</span><br>
          <span >Raleigh, North Carolina</span><br>
          <v-divider class="my-4" inset></v-divider>
          <span :class="{'subtitle-2 mr-8': $vuetify.breakpoint. smAndDown, 'float-left subtitle-2': $vuetify.breakpoint. mdAndUp}">Email</span>
          <span>info@aletheiafellowship.org</span>
        </v-flex> -->
      </v-layout>
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
