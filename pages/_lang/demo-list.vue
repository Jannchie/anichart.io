<template>
  <v-row>
    <v-col
      v-for="item in list"
      :key="item.name"
      cols="6"
      lg="3"
      class="text-center"
    >
      <v-card :to="item.to">
        <v-card-title>{{ $t(item.name) }}</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      list: [
        {
          name: 'demo.bar',
          to: './demo/bar',
        },
        {
          name: 'demo.line',
          to: './demo/line',
        },
      ],
    };
  },
});
</script>
