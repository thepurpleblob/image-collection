<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="5">
                <div>{{ error }}</div>
                <v-form @submit.prevent="doLogin">
                    <v-text-field v-model="username" label="Username"></v-text-field>
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
          username: '',
          password: '',
          error: ''
        }),
        methods: {
            doLogin: function() {
                let result = wsclient.authenticate(this.username, this.password)
                result.then(function(response) {
                    let user = response.data;
                    window.console.log(user)
                })
                window.console.log(result);
            }
        }
    }
</script>