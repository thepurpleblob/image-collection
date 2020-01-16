<template>
    <v-container>
        <v-row>
            <v-col cols="10">
                <v-form @submit.prevent="doSearch">
                    <v-text-field v-model="searchtext" label="Search our database">
                        
                    </v-text-field>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    export default {
        data: () => ({
          searchtext: '',
        }),
        methods: {
            doSearch: function() {
                this.$router.push({
                    name: 'searchresult',
                    params: {
                        searchtext: this.searchtext
                    }
                });
            }
        }
    }
</script>