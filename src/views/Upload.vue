<template>
    <v-container>

        <v-row class="mt-10">
            <v-col cols="10">
                    <v-file-input
                        v-model="chosenFile"
                        accept=".zip,.csv"
                        @change="doUpload()"
                        label="Upload zip or csv"
                        append-icon="upload">
                    </v-file-input>
            </v-col>
        </v-row>

        <v-row v-if="waiting">
            <v-progress-circular
                indeterminate
                color="primary"
            ></v-progress-circular>
        </v-row>

        <v-row v-if="isanydata">
            <v-alert
                border="top"
                colored-border
                type="info"
                elevation="2"
                >
                This is the first few rows of data from your CSV file. Please check that it has been read correctly and then
                click the Continue button beneath.
            </v-alert>
            <v-simple-table>
                <thead>
                    <tr>
                        <th v-for="(item, id) in headeritems" :key="id">{{ item }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, id) in confirmitems" :key="id">
                        <td v-for="(item, itemid) in row" :key="itemid">{{ item }}</td>
                    </tr>
                </tbody>
            </v-simple-table>    
            <div>
                <v-btn
                    color="primary"
                    @click="sendData()"
                >
                    Continue
                </v-btn>
                <v-btn
                    class="ml-1"
                    color="warning"
                >Cancel</v-btn>
            </div>
        </v-row>

    </v-container>
</template>

<script>
    import wsclient from '@/services/wsclient.js';
    import csvparse from 'csv-parse'

    export default {
        data: () => ({
          chosenFile: null,
          csvdata: [],
          waiting: false,
        }),

        computed: {
            isanydata: function() {
                return this.csvdata.length !== 0
            },

            headeritems: function() {
                return this.csvdata[0]
            },

            confirmitems: function() {
                return this.csvdata.slice(1,10)
            }
        },

        methods: {
            doUpload: function() {
                //let filename = this.chosenFile.name
                let reader = new FileReader()
                let v = this
                this.waiting = true
                reader.readAsText(this.chosenFile)
                reader.onload = function() {
                    let csvdata = reader.result
                     csvparse(csvdata, {}, function(err, output) {
                         v.csvdata = output
                         v.waiting = false
                     })
                }
            },

            sendData: function() {
                this.waiting = true
                let result = wsclient.uploadcsvdata(this, JSON.stringify(this.csvdata))
                let v = this
                result.then(function(response) {
                    v.waiting = false
                    window.console.log(response)
                })
            }
        }
    }
</script>