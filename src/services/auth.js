import wsclient from '@/services/wsclient.js'
import store from '@/store'

export default {

    isloggedin: function() {
        const minutes20 = 20 * 60
        let user = store.state.user
        if (user.length == 0) {
            return false
        }
        let token = user['token']
        window.console.log('token is ' + token)
        let timenow = Math.floor(Date.now() / 1000)
        if ((timenow - user.authtime) < minutes20) {
            window.console.log('grant access due to cached time')
            return true
        }
        let loggedin = wsclient.loggedin(token)
        loggedin.then(function(result) {
            if (result) {
                window.console.log('grant access due to server response')
                return true
            } else {
                store.commit('setuser', {})
                window.console.log('refuse access due to server response')
                return false
            }

        })
        .catch(function() {
            window.console.log('refuse access due to error')
            return false
        })
    },

}