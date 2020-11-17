<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-title> Preview </v-card-title>
        <v-card-text>
          <div id="preview"></div>
        </v-card-text>
        <anichart-ctl :anichart="anichart"></anichart-ctl>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-title>Csv File</v-card-title>
        <v-card-text>Import Csv File</v-card-text>
        <v-card-actions>
          <v-file-input
            truncate-length="50"
            label="Meta Table"
            prepend-icon="mdi-table"
          ></v-file-input>
        </v-card-actions>
        <v-card-actions>
          <v-file-input
            truncate-length="50"
            label="Data Table"
            prepend-icon="mdi-table"
          ></v-file-input>
        </v-card-actions>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary"
            ><v-icon left>mdi-content-save</v-icon>Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-title>Settings</v-card-title>
        <v-card-text>
          <v-textarea outlined></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="orange" dark
            ><v-icon left>mdi-export</v-icon>Output</v-btn
          >
          <v-btn color="primary"
            ><v-icon left>mdi-content-save</v-icon>Save</v-btn
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
    await a.loadCsv('./data/preview.csv');
    await a.readyToDraw();
    this.anichart = a;
    window.a = a;
  },
};
</script>
