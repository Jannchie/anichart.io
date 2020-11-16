<template>
  <v-card-actions>
    <v-btn icon><v-icon>mdi-play</v-icon></v-btn>
    <v-slider
      v-model="current"
      inverse-label
      thumb-label
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
    return { label: 'loading', max: 100, current: 0 };
  },
  watch: {
    'anichart.ready'(val) {
      if (val === true) {
        this.max = this.anichart.frameData.length - 1;
        this.label = `${this.anichart.currentFrame + 1} / ${
          this.anichart.frameData.length
        }`;
        this.anichart.drawFrame(this.anichart.currentFrame);
        this.current = this.anichart.currentFrame;
      }
    },
    current(val) {
      this.anichart.drawFrame(val);
    },
  },
};
</script>
