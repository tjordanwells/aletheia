<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12 my-6>
        <h1 class="display-4 font-weight-thin my-2">
          Aletheia
        </h1>
        <v-divider class="mx-auto" width="50%" />
        <h2 class="display-4 font-weight-thin my-2">
          Fellowship
        </h2>
      </v-flex>
      <v-flex>
        <div class="verse-container mt-12">
          <p class="overline text-right align-end">
            17 Sanctify them in the truth; Your word is truth.
            18 As You sent Me into the world, I also have sent them into the world.
            19 For their sakes I sanctify Myself, that they themselves also may be sanctified in truth.
          </p>
          <p class="overline text-right">
            John 17:17-19 NASB
          </p>
        </div>
      </v-flex>
    </v-layout>
    <v-divider class="mb-12" />
    <v-layout>
      <v-flex xs12 md6 lg4 class="mx-4">
        <Player />
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
  margin-left: 470px;
}
</style>