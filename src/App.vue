<template>
  <v-app>
     <Header/>

    <v-content>
      <v-container fluid>
        <router-view />
        <Footer />
      </v-container>  
    </v-content>

  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },

  data: () => ({
      user: {},
      //publicPath: process.$env.BASE_URL,
  }),

  mounted: function() {

  },

  methods: {
      //loggedin: function(loggedinuser) {
      //    this.user = loggedinuser
      //    window.console.log('got here too!')
      //}
  }
};
</script>

