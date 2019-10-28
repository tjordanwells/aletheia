<template>
  <v-container>
      <h1 class="text-center display-3 my-4 font-weight-thin">Sermons</h1>
      <v-layout row wrap>
        <v-flex xs12 md6 lg4 text-center py-4>
          <Player
            :file="file"
          />
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import Player from '../audio/Player'

export default {
  data () {
    return {
      file: require('../../assets/1013sermon.mp3')
    }
  },
  components: {
    Player
  }
}
</script>
