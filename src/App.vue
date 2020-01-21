<template>
  <v-app>
     <Header/>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',

  components: {
    Header,
  },

  data: () => ({
      user: {}
  }),

  methods: {
      loggedin: function(loggedinuser) {
          this.user = loggedinuser
          window.console.log('got here too!')
      }
  }
};
</script>

