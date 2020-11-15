<template>
  <v-row>
    <v-col v-for="i in [1, 2, 3, 4, 5, 6]" :key="i" cols="4">
      <v-card>
        <v-card-title> Title </v-card-title>
        <v-card-text> Author: Jannchie </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
