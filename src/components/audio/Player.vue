<template>
  <v-card style="text-align-center">
    <v-card-title class="justify-center font-weight-light">
      Recent Sermons
    </v-card-title>
    <v-divider class="mb-1" />
    <v-card-text>
      <v-btn outlined icon class="mx-1" color="blue-grey" @click="playing ? pause() : play()" :disabled="!loaded">
        <v-icon v-if="!playing || paused">mdi-play</v-icon>
        <v-icon v-else>mdi-pause</v-icon>
      </v-btn>
        <v-btn outlined icon class="mx-1" color="blue-grey" @click="stop()" :disabled="!loaded">
        <v-icon>mdi-stop</v-icon>
      </v-btn>
      <v-btn outlined icon class="mx-1" color="blue-grey" @click="mute()" :disabled="!loaded">
        <v-icon v-if="!isMuted">mdi-volume-high</v-icon>
        <v-icon v-else>mdi-volume-low</v-icon>
      </v-btn>
      <v-btn outlined icon class="mx-1" color="blue-grey" @click="loaded ? download() : reload()">
        <v-icon v-if="!loaded">mdi-refresh</v-icon>
        <v-icon v-else>mdi-download</v-icon>
      </v-btn>
    </v-card-text>
    <v-card-text>
        <v-slider @click="setPosition()" v-model="percentage" :disabled="!loaded" track-color="blue-grey lighten-3" color="blue-grey"/>
        <p>{{ currentTime }} / {{ duration }}</p>
    </v-card-text>
    <v-divider/>
    <v-list>
      <v-list-item-group
        v-model="model"
        mandatory
        color="blue-grey"
      >
        <v-list-item
        v-for="i in count"
        :key="i"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title v-text="item.date"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <audio id="player" ref="player" v-on:ended="ended" v-on:canplay="canPlay" :src="file"></audio>
 </v-card>
</template>
<script>
    const formatTime = second => new Date(second * 1000).toISOString().substr(11, 8);
    export default {
        props: {
          file: {
            type: String,
            default: null
          },
          sermons: {
            type: Array,
            default: null
          },
          autoPlay: {
            type: Boolean,
            default: false
          },
          ended: {
            type: Function,
            default: () => {},
          },
          canPlay: {
            type: Function,
            default: () => {},
          },
        },
        computed: {
          duration: function () {
            return this.audio ? formatTime(this.totalDuration) : ''
          },
        },
        data () {
          return {
            firstPlay: true,
            isMuted: false,
            loaded: false,
            playing: false,
            paused: false,
            percentage: 0,
            currentTime: '00:00:00',
            audio: undefined,
            totalDuration: 0,
            item: {
              text: 'test sermon title',
              date: '10-25-2019'
            },
            count: 4,
            model: 0
          }
        },
        methods: {
            setPosition () {
                this.audio.currentTime = parseInt(this.audio.duration / 100 * this.percentage);
            },
            stop () {
                this.paused = this.playing = false
                this.audio.pause()
                this.audio.currentTime = 0
            },
            play () {
              this.audio.play()
              this.playing = true
            },
            pause () {
                this.paused = !this.paused;
                (this.paused) ? this.audio.pause() : this.audio.play()
            },
            download () {
                this.audio.pause()
                window.open(this.file, 'download')
            },
            mute () {
                this.isMuted = !this.isMuted
                this.audio.muted = this.isMuted
                this.volumeValue = this.isMuted ? 0 : 75
            },
            reload () {
                this.audio.load();
            },
            handleLoaded: function () {
                if (this.audio.readyState >= 2) {
                    if (this.audio.duration === Infinity) {
                        this.audio.currentTime = 1e101;
                        this.audio.ontimeupdate = () => {
                            this.audio.ontimeupdate = () => {}
                            this.audio.currentTime = 0
                            this.totalDuration = parseInt(this.audio.duration)
                            this.loaded = true;
                        }
                    } else {
                        this.totalDuration = parseInt(this.audio.duration)
                        this.loaded = true
                    }
                    if (this.autoPlay) this.audio.play()
                } else {
                    throw new Error('Failed to load sound file')
                }
            },
            handlePlayingUI: function (e) {
                e.preventDefault()
                this.percentage = this.audio.currentTime / this.audio.duration * 100
                this.currentTime = formatTime(this.audio.currentTime)
            },
            handlePlayPause: function (e) {
                if (e.type === 'play' && this.firstPlay) {
                    this.audio.currentTime = 0;
                    if (this.firstPlay) {
                        this.firstPlay = false;
                    }
                }
                if (e.type === 'pause' && this.paused === false && this.playing === false) {
                    this.currentTime = '00:00:00'
                }
            },
            handleEnded () {
                this.paused = this.playing = false;
            },
            init: function () {
                this.audio.addEventListener('timeupdate', this.handlePlayingUI);
                this.audio.addEventListener('loadeddata', this.handleLoaded);
                this.audio.addEventListener('pause', this.handlePlayPause);
                this.audio.addEventListener('play', this.handlePlayPause);
                this.audio.addEventListener('ended', this.handleEnded);
            },
        },
        mounted () {
            this.audio = this.$refs.player;
            this.init();
        },
        beforeDestroy () {
            this.audio.removeEventListener('timeupdate', this.handlePlayingUI)
            this.audio.removeEventListener('loadeddata', this.handleLoaded)
            this.audio.removeEventListener('pause', this.handlePlayPause)
            this.audio.removeEventListener('play', this.handlePlayPause)
            this.audio.removeEventListener('ended', this.handleEnded);
        }
    }
</script>