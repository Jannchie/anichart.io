<template>
  <v-card-actions>
    <v-btn icon @click="play"
      ><v-icon>{{ playIcon }}</v-icon></v-btn
    >
    <v-slider
      v-model="anichart.currentFrame"
      inverse-label
      hide-details
      :disabled="anichart === undefined"
      :label="label"
      :max="max"
      :min="0"
    ></v-slider>
  </v-card-actions>
</template>

<script>
export default {
  props: {
    anichart: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return { label: 'loading', max: 100, playIcon: 'mdi-play', playing: false };
  },
  watch: {
    'anichart.currentFrame'(val) {
      if (this.anichart.frameData !== undefined) {
        this.label = `${val + 1} / ${this.anichart.frameData.length}`;
        if (
          this.anichart.currentFrame === this.anichart.frameData.length - 1 &&
          this.playing
        ) {
          this.playing = false;
          this.playIcon = 'mdi-play';
        }
      }
    },
    'anichart.ready'(val) {
      if (val === true) {
        this.max = this.anichart.frameData.length - 1;
        this.label = `${this.anichart.currentFrame + 1} / ${
          this.anichart.frameData.length
        }`;
        this.anichart.drawFrame(this.anichart.currentFrame);
      }
    },
  },
  methods: {
    play() {
      if (this.playIcon === 'mdi-play') {
        this.playIcon = 'mdi-pause';
        this.playing = true;
        this.anichart.play();
      } else {
        this.playing = false;
        this.playIcon = 'mdi-play';
        this.anichart.play();
      }
    },
  },
};
</script>
