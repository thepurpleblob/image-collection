<template>
    <v-container>
        <v-row>
            <v-col cols="10">
                This is the result page. Searchtext is "{{ resulttext }}"
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import wsclient from '@/services/wsclient.js';

    export default {
        props: ['searchtext'],
        data: () => ({
            resulttext: ''
        }),
        methods: {

        },
        mounted: function() {
            let result = wsclient.findimages(this.searchtext);
            let v = this;
            result.then(function(response) {
                v.resulttext = response.data;
            })
            window.console.log(result);
        }
    }
</script>