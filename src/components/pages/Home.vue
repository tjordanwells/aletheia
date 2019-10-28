<template>
  <v-container class="my-12">
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12 md12 lg12 xl12 my-6>
        <h1 class="display-4 font-weight-thin my-2">
          Aletheia
        </h1>
        <v-divider class="mx-auto" width="50%" />
        <h2 class="display-4 font-weight-thin my-2">
          Fellowship
        </h2>
      </v-flex>
      <v-flex xs12 md6 lg6 class="mx-auto">
          <p class="overline text-right align-end">
            17 Sanctify them in the truth; Your word is truth.
            18 As You sent Me into the world, I also have sent them into the world.
            19 For their sakes I sanctify Myself, that they themselves also may be sanctified in truth.
          </p>
          <p class="overline text-right">
            John 17:17-19 NASB
          </p>
      </v-flex>
    </v-layout>
    <v-divider class="mb-12" />
    <v-layout>
      <v-flex xs12 md6 lg4 class="mx-4">
        <v-card style="text-align-center">
          <v-card-title class="justify-center font-weight-light">
            Sunday Service
          </v-card-title>
          <v-divider class="mb-1" />
          <v-card-text>
            We gather for Sunday Worship at 10:30am. Coffee and pastries
            are generally provided beforehand with lunch following the
            service.
          </v-card-text>
          <v-card-text class="text-center title">
            Address
          </v-card-text>
          <v-card-text class="text-center subtitle-1">
            3009 Gentle Breezes Lane
            Raleigh, North Carolina
          </v-card-text>
          <v-divider />
          <v-btn text block target="_blank" href="https://www.google.com/maps/place/3009+Gentle+Breezes+Ln,+Raleigh,+NC+27614/@35.9226794,-78.5644686,17z/data=!3m1!4b1!4m5!3m4!1s0x89ac50d2424af347:0xafe84e0c3f0e5755!8m2!3d35.9226794!4d-78.5622799">
            Get Directions
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card>
      </v-flex>
      <v-flex xs12 md6 lg4 class="mx-4">
        <Player />
      </v-flex>
      <v-flex xs12 md6 lg4 class="mx-4">
        <Player />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Player from '../audio/Player'

export default {
  components: {
    Player
  }
}
</script>

<style scoped>
.verse-container {
  width: 400px;
}
</style>