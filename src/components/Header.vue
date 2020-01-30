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
        </v-app-bar>  
    </header>  
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
    }),

    methods: {
      home: function() {
        this.$router.push('search')
      }
    }
  }
</script>