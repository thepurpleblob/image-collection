<template>
    <v-container>

        <v-row class="mt-10">
            <v-col cols="10">
                <v-card>
                    <v-card-text>
                        Upload your CSV data or zip file of images here. <br />
                        The CSV file's first row must contain headers and this will be used to set the order of the rest
                        of the data. Matching object numbers will overwrite/update previous data in the database. 
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-row v-if="state == 'completed'" class="mt-5">
            <v-col>
                <v-alert type="success">
                    Data was uploaded.
                    <span v-if="errorcount">
                        {{ errorcount }} lines were skipped due to errors.
                    </span>
                </v-alert>
            </v-col>
        </v-row>

        <v-row v-if="(state == 'ready' || state == 'completed') && !isanydata" class="mt-10">
            <v-col cols="10">
                    <v-file-input
                        v-model="chosenFile"
                        accept=".zip,.csv"
                        @change="doUpload()"
                        label="Upload zip or csv"
                    >
                    </v-file-input>
            </v-col>
        </v-row>

        <v-row v-if="state == 'uploading'">
            <v-col>
                Uploading, please wait
            </v-col>
            <v-col>
                <v-progress-linear
                    v-model="percentCompleted"
                    color="light-blue"
                    height="10"
                    striped
                ></v-progress-linear>
            </v-col>
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
    import wsclient from '@/services/wsclient.js'
    import csvparse from 'csv-parse'

    export default {
        data: () => ({
          chosenFile: [],
          csvdata: [],
          errors: [],
          state: 'ready',
          percentCompleted: 0
        }),

        computed: {
            isanydata: function() {
                return this.csvdata.length !== 0
            },

            errorcount: function() {
                return this.errors.length
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
                let filename = this.chosenFile.name
                let extension = filename.split('.').pop()
                window.console.log(filename, extension)
                let reader = new FileReader()
                let v = this
                if (extension == 'csv') {
                    reader.readAsText(this.chosenFile)
                    reader.onload = function() {
                        let csvdata = reader.result
                        csvparse(csvdata, {}, function(err, output) {
                            v.csvdata = output
                            v.chosenFile = []
                        })
                    }
                } else if (extension == 'zip') {
                    this.state = 'uploading'
                    this.percentCompleted = 0;
                    let result = wsclient.uploadzipfile(this.chosenFile, function(progressEvent) {
                        v.percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total )
                        window.console.log(v.percentCompleted)
                    })
                    result.then(function(result) {
                        window.console.log(result)
                        v.state = 'completed'
                        v.chosenFile = []
                    })
                    
                }
            },

            sendData: function() {
                this.state = 'uploading'
                this.percentCompleted = 0
                let result = wsclient.uploadcsvdata(JSON.stringify(this.csvdata), function(progressEvent) {
                        v.percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total )
                        window.console.log(v.percentCompleted)
                    })
                let v = this
                result.then(function(response) {
                    v.csvdata = []
                    v.errors = response.data
                    v.state = 'completed'
                    v.chosenFile = []
                })
                .catch(function() {
                    v.$router.push('servererror')
                }) 
            }
        }
    }
</script>