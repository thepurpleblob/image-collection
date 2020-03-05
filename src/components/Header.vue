<template>
    <header>

        <v-navigation-drawer
          v-model="drawer"
          app
          clipped
        >
            <v-list dense>
                <v-list-item link to="search">
                    <v-list-item-action >
                        <v-icon>mdi-magnify</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Search</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="about">
                    <v-list-item-action>
                        <v-icon>mdi-information-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>About</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-at</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Contact</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
             </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-left height="130">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-img 
                src="@/assets/museum200.png"
                alt="The Museum of Scottish Railways and The Bo'ness and Kinneil Railway"
                max-width="200px"
                max-height="118px"
                :style="{cursor: 'pointer'}"
                @click="home" />
            <v-toolbar-title class="ml-8 display-1">Online collections database</v-toolbar-title>
        </v-app-bar>  
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