<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="5">
                <v-alert type="error" v-if="error">{{ error }}</v-alert>
                <v-form @submit.prevent="doLogin">
                    <v-text-field v-model="email" label="Email"></v-text-field>
                    <v-text-field v-model="password" label="Password" :type="'password'"></v-text-field>
                    <v-btn type="submit" color="success">Login</v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import wsclient from '@/services/wsclient.js';

    export default {
        data: () => ({
          email: '',
          password: '',
          error: ''
        }),
        methods: {
            doLogin: function() {
                let result = wsclient.login(this.username, this.password)
                //let v = this
                result.then(function(response) {
                    window.console.log(response)
                })
            }
        },

        mounted: function() {
            window.console.log('Login mounted')
        },

        activated: function() {
            window.console.log('Login activated')
            //this.username = ''
            //this.password = ''
        }
    }
</script>