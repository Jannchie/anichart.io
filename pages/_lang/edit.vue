<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-title> {{ $t('edit.preview') }} </v-card-title>
        <v-card-text>
          <div id="preview"></div>
        </v-card-text>
        <anichart-ctl :anichart="anichart"></anichart-ctl>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-title>{{ $t('csv-file') }}</v-card-title>
        <v-card-text>{{ $t('import-csv-file') }}</v-card-text>
        <v-card-actions>
          <v-file-input
            truncate-length="50"
            :label="$t('meta-table')"
            prepend-icon="mdi-table"
          ></v-file-input>
        </v-card-actions>
        <v-card-actions>
          <v-file-input
            truncate-length="50"
            :label="$t('data-table')"
            prepend-icon="mdi-table"
          ></v-file-input>
        </v-card-actions>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary"
            ><v-icon left>mdi-content-save</v-icon>{{ $t('save') }}</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-title>{{ $t('options') }}</v-card-title>
        <v-card-text>
          <v-textarea outlined></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="orange" dark
            ><v-icon left>mdi-export</v-icon>{{ $t('output') }}</v-btn
          >
          <v-btn color="primary"
            ><v-icon left>mdi-content-save</v-icon>{{ $t('save') }}</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import AnichartCtl from '~/components/AnichartCtl.vue';
export default {
  components: { AnichartCtl },
  data() {
    return { anichart: {} };
  },

  async mounted() {
    const a = new window.anichart.Bar({
      height: 400,
      output: false,
      itemCount: 4,
    });
    a.width = document.querySelector('#preview').offsetWidth;
    a.initCanvas('#preview');
    await a.loadCsv('/data/preview.csv');
    await a.readyToDraw();
    this.anichart = a;
    window.a = a;
  },
  head() {
    return {
      title: this.$t('edit.title'),
    };
  },
};
</script>
