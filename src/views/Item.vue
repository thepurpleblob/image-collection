<template>
    <v-container>
        <v-row>
            <v-col cols="10">
                
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    //import wsclient from '@/services/wsclient.js';
    import config from '@/config/config.js'

    export default {
        props: [],
        data: () => ({
            apiurl: config.imageurl + '/',
        }),
        methods: {

        },
        watch: {
            $route: {
                immediate: true, 
                handler: function() {
                    window.console.log(this.$route.params)
                }
            }
        
        },
        /* mounted: function() {
            let objectnumber = this.$route.params.objectnumber
            //let v = this
            let result = wsclient.findimage(objectnumber)
            result.then(function(response) {
                window.console.log(response)
            })
        } */
    }
</script>