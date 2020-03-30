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
        let timenow = Math.floor(Date.now() / 1000)
        if ((timenow - user.authtime) < minutes20) {
            return true
        }
        let loggedin = wsclient.loggedin(token)
        loggedin.then(function(result) {
            if (result) {
                return true
            } else {
                store.commit('setuser', {})
                return false
            }

        })
        .catch(function() {
            return false
        })
    },

}