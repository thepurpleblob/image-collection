<template>
  <v-app>
     <Header/>

    <v-content>
      <router-view />
    </v-content>

    <Footer />
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
      let t = this
      fetch('/config.json')
          .then(function(result) {
              return result.json()    
          })
          .then(function(conf) {
              t.$store.commit('setconfig', conf)
              window.console.log(conf)
          })
  },

  methods: {
      loggedin: function(loggedinuser) {
          this.user = loggedinuser
          window.console.log('got here too!')
      }
  }
};
</script>

