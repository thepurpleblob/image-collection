<template>
    <v-container>
        <v-row>
            <v-col md="6">
                <v-img
                    v-if="image.exists" 
                    :src="apiurl + image.reproduction_reference"
                    min-height="275px"
                    lazy-src="@/assets/imageload.png"
                >
                </v-img>  
                <v-alert 
                    v-else
                    type="warning"
                    class="mt-5"
                    >
                    Image is not available
                </v-alert> 
                <v-divider class="mt-4"></v-divider>
                <div class="mt-4 font-weight-thin">Image Copyright Scottish Railway Preservation Society</div>
            </v-col>
            <v-col md="6">
                <h1 class="mt-2">{{ image.title }}</h1>
                <h2 class="mt-4">Object number</h2>
                {{ image.object_number }}
                <h2 class="mt-4">Category</h2>
                {{ image.object_category }}
                <h2 class="mt-4">Description</h2>
                {{ image.description }}
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import wsclient from '@/services/wsclient.js';
    import config from '@/config/config.js'

    export default {
        props: ['objectnumber'],
        data: () => ({
            image: {},
            apiurl: config.imageurl + '/',
        }),
        methods: {

        },
        mounted: function() {
            let result = wsclient.findsingle(this.objectnumber);
            let v = this;
            result.then(function(response) {
                v.image = response.data;
                window.console.log(v.image)
            })         
        },
    }
</script>