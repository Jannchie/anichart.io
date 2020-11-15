<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <!-- <logo /> -->
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Anichart.io
        </v-card-title>
        <v-card-text>
          <p>
            Anichart is a data visualization site.Users can upload their own
            data, create visual videos, and export them to MP4 files.In the
            future, users will be able to share their own profiles or data. The
            project is completely open source.
          </p>
          <p>
            For more information on Anichart, check out the
            <a
              href="https://github.com/Jannchie/anichart.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              repository </a
            >.
          </p>
          <p>
            Find a bug? Report it on the github
            <a
              href="https://github.com/Jannchie/anichart.js/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board </a
            >.
          </p>
          <p>Thank you for developing with Anichart.</p>
          <div class="text-xs-right">
            <em><small>&mdash; Jannchie</small></em>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/edit"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
};
</script>
