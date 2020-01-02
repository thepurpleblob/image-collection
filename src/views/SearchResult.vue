<template>
    <v-container>
        <v-row>
            <v-col v-for="image in images" :key="image.id" cols="3">
                <h3 class="subtitle-2">{{ image.title }}</h3>
                <v-img :src="apiurl + image.reproduction_reference" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import wsclient from '@/services/wsclient.js';
    import config from '@/config/config.js'

    export default {
        props: ['searchtext'],
        data: () => ({
            resulttext: '',
            images: [],
            apiurl: config.imageurl + '/',
        }),
        methods: {

        },
        mounted: function() {
            let result = wsclient.findimages(this.searchtext);
            let v = this;
            result.then(function(response) {
                v.images = response.data;
            })         
        }
    }
</script>