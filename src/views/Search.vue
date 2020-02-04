<template>
    <v-container>
        <v-row class="mt-10">
            <v-col cols="10">
                <v-form @submit.prevent="doSearch">
                    <v-text-field
                        v-model="searchtext"
                        label="Search our database"
                        append-icon="search">
                    </v-text-field>
                    <v-btn dark color="pink" type="submit">
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