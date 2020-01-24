<template>
    <v-container>
        <v-row>
            <v-col v-for="image in images" :key="image.id" cols="3" @click="showsingle(image.object_number)">
                <v-card class="mx-auto" min-height="300px">
                    <v-img 
                        :src="apiurl + image.reproduction_reference"
                        min-height="275px"
                        aspect-ratio="1"
                        lazy-src="@/assets/loading.jpg"
                    >
                    </v-img>
                    <v-card-text>{{ image.title }}</v-card-text>
                </v-card>
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
            showsingle: function(object_number) {
                window.console.log(object_number)
            }
        },
        mounted: function() {
            let result = wsclient.findimages(this.searchtext);
            let v = this;
            result.then(function(response) {
                v.images = response.data;
            })         
        },
    }
</script>