<template>
    <header>
        <v-app-bar height="130">
            <v-img 
                src="@/assets/museum200.png"
                alt="The Museum of Scottish Railways and The Bo'ness and Kinneil Railway"
                max-width="200px"
                max-height="118px"
                :style="{cursor: 'pointer'}"
                @click="home" />
            <v-toolbar-title class="ml-8 display-1">Online collections database</v-toolbar-title>

        </v-app-bar>  
        <v-bottom-navigation v-if="loggedin" class="mt-4">
            <v-btn to="search">
                <span>Search</span>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </header>  
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
    }),

    computed: {
        loggedin: function() {
            return (Object.keys(this.$store.state.user).length !== 0 ? true : false)
        }
    },

    methods: {
      home: function() {
        this.$router.push('search')
      }
    }
  }
</script>