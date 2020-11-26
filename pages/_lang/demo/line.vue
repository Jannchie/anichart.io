<template>
  <v-row>
    <v-col class="text-center">
      <v-card height="100%">
        <v-card-title> {{ $t('edit.preview') }} </v-card-title>
        <v-card-text>
          <canvas id="preview" style="line-height: 0"></canvas>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from 'vue';
import { LineChart, Scene } from 'anichart';
export default Vue.extend({
  data() {
    return {
      line: new LineChart({ days: 3 }),
      scene: new Scene(),
    };
  },
  async mounted() {
    this.scene.addComponent(this.line);
    this.scene.renderer.shape = { width: 1600, height: 400 };
    this.scene.player.fps = 144;
    this.scene.renderer.setCanvas('#preview');
    await this.line.loadData(`${this.$router.options.base}data/preview.csv`);
    this.scene.update();
    this.scene.player.play();
  },
});
</script>
