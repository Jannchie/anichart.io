<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-title> Preview </v-card-title>
        <v-card-text>
          <canvas id="preview" width="100%" height="600px"></canvas>
        </v-card-text>
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
          <v-btn color="orange"><v-icon left>mdi-export</v-icon>Output</v-btn>
          <v-btn color="primary"
            ><v-icon left>mdi-content-save</v-icon>Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
