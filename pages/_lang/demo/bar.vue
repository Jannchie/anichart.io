<template>
  <v-row>
    <v-col class="text-center">
      <v-card height="100%">
        <v-card-title> {{ $t('edit.preview') }} </v-card-title>
        <v-card-text>
          <div id="preview" style="line-height: 0"></div>
        </v-card-text>
        <anichart-ctl :anichart="bar"></anichart-ctl>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from 'vue';
import { Bar } from 'anichart';
export default Vue.extend({
  data() {
    return {
      bar: Object(),
    };
  },
  async mounted() {
    this.bar = new Bar({ height: 300, itemCount: 3 });
    this.bar.initCanvas('#preview');
    await this.bar.loadCsv(`${this.$router.options.base}data/preview.csv`);
  },
});
</script>
