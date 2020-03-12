<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="5">
                <v-alert type="error" v-if="error">{{ error }}</v-alert>
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
                let v = this
                result.then(function(response) {
                    let user = response.data;
                    if (!user) {
                        v.error = 'Invalid login'
                    } else {
                        window.console.log(user)
                        user.authtime = Math.floor(Date.now() / 1000)
                        v.$store.commit('setuser', user)
                        let wantspath = v.$store.state.wantspath
                        if (!wantspath == undefined) {
                            wantspath = 'search'
                        }
                        v.$store.commit('setwantspath', '')
                        v.$router.push(wantspath)
                    }
                })
            }
        }
    }
</script>