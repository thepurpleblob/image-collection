<template>
    <v-container>

       <v-row class="mt-10">
           <v-col cols="2">
               <v-img src="@/assets/mindthegap.jpg" />
           </v-col>
           <v-col cols="8">
               Explore our small object collection by searching below and discover the thousands
               of objects in our collection from photographs to signs and costume to publicity posters. 
               This website will be frequently updated so please check back for updates.
           </v-col>
       </v-row>    

        <v-row class="mt-10 mb-10">
            <v-col cols="10">
                <v-form @submit.prevent="doSearch">
                    <v-text-field
                        v-model="searchtext"
                        label="Search our database"
                        append-icon="search">
                    </v-text-field>
                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-header>Advanced...</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p class="font-weight-bold">Only search in these categories...</p>
                                <v-row>
                                    <v-col cols="3" v-for="category in categories" :key="category">
                                        <v-switch
                                            :label="category"
                                            :value="category"
                                            v-model="filtercats">
                                        </v-switch>
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <v-btn class="mt-5" dark color="pink" type="submit">
                        Search
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import wsclient from '@/services/wsclient.js'

    export default {
        data: () => ({
          searchtext: '',
          categories: [],
          filtercats: [],
        }),

        methods: {
            doSearch: function() {
                this.$router.push({
                    name: 'searchresult',
                    params: {
                        searchtext: this.searchtext,
                        filtercats: this.filtercats
                    }
                });
            }
        },

        mounted: function() {
            let v = this
            let result = wsclient.getcategories()
            window.console.log(result)
            result.then(function(cats) {
                window.console.log(cats.data)
                v.categories = cats.data.map(field => field.object_category)
            })
            .catch(function(error) {
                window.console.log('Error: ' + error)
            })
        }
    }
</script>