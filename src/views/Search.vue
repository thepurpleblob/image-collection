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
                        append-icon="">
                    </v-text-field>

                    <v-btn class="mt-5" dark color="pink" type="submit">
                        Search
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
          searchtext: '',
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

        }
    }
</script>