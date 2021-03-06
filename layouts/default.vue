<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="getLangPath(item.to)"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-menu v-model="showMenu" absolute offset-y style="max-width: 600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" text v-on="on">
            <v-icon left>mdi-web</v-icon>{{ $t('language') }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in ['zh', 'en']"
            :key="index"
            @click.stop="changeLanguage(item)"
          >
            <v-list-item-title>{{ $t(`lang.${item}`) }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: true,
      showMenu: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-pencil',
          title: 'Edit Page',
          to: '/edit',
        },
        {
          icon: 'mdi-view-grid',
          title: 'List Charts',
          to: '/list',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: 'mdi-chart-areaspline',
          title: 'Demo',
          to: '/demo-list',
        },
      ],
      miniVariant: true,
      title: 'Anichart.io',
    };
  },
  methods: {
    getLangPath(to) {
      return `/${this.$store.state.locale}${to}`;
    },
    changeLanguage(lang) {
      this.$router.push({
        params: { lang },
      });
    },
  },
};
</script>
