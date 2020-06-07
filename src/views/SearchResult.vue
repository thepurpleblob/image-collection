<template>
    <v-container>
        <v-row v-if="anyimages">
            <h2>Results for search '{{ searchtitle }}'</h2>
        </v-row>
        <v-row cloak v-else>
            <v-alert cloak type="info">No images found for search '{{ searchtext }}'</v-alert>
        </v-row>
        <v-row>
            <v-col 
                v-for="image in images" 
                :key="image.id"
                lg="2"
                md="3"
                @click="showsingle(image.object_number)"
                >
                <v-card class="mx-auto" min-height="300px">
                    <v-img
                        v-if="image.exists" 
                        :src="apiurl + image.reproduction_reference"
                        min-height="275px"
                        aspect-ratio="1"
                        lazy-src="@/assets/imageload.png"
                        :style="{cursor: 'pointer'}"
                    >
                    </v-img>
                    <v-img
                        v-if="!image.exists"
                        min-height="275px"
                        aspect-ratio="1"
                        lazy-src="@/assets/imageload.png"
                        :style="{cursor: 'pointer'}"
                    >
                    </v-img>
                    <v-card-text>
                        {{ image.title }}
                        <div v-if="debug"><small>
                            Img path: <a :href="apiurl + image.reproduction_reference">{{apiurl + image.reproduction_reference}}</a><br />
                            Exists? <span v-if="image.exists">True</span><span v-else>False</span>
                        </small></div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mt-4">
            <v-col>
                <v-btn color="info" to="search">Back to Search</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import wsclient from '@/services/wsclient.js'

    export default {
        props: ['searchtext', 'filtercats'],
        data: () => ({
            resulttext: '',
            images: [],
            anyimages: true,
        }),
        computed: {
            searchtitle: function() {
                return this.$store.state.searchtext
            },
            apiurl: function() {
                return this.$store.state.config.imageurl + '/'
            },
            debug: function() {
                return this.$store.state.config.debug
            }
        },
        methods: {
            showsingle: function(object_number) {
                this.$router.push({
                    name: 'single',
                    params: {
                        objectnumber: object_number
                    }
                });
            }
        },
        mounted: function() {
            let search = this.searchtext

            // We store search string in vuex in case we end up back here 
            // (e.g. browser back button)
            if (!search) {
                search = this.$store.state.searchtext
            } else {
                this.$store.commit('setsearchtext', search)
            }

            // If, for some reason, searchtext is empty no point going further
            if (!search) {
                this.$router.push('search');
            }

            let result = wsclient.findimages(this.$store, search, this.filtercats);
            let v = this;
            result.then(function(response) {
                v.images = response.data;
                v.anyimages = !(v.images === undefined || v.images.length == 0)
            })
            .catch(function() {
                v.$router.push('servererror')
            })     
        },
    }
</script>