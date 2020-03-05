import axios from 'axios';

export default {

    findimages: function(t, searchtext) {
        let data = new FormData()
        data.append('action', 'findimages')
        data.append('searchtext', searchtext)
        return axios.post(t.$store.state.config['apiurl'], data)
    },

    authenticate: function(t, username, password) {
        let data = new FormData()
        data.append('action', 'authenticate')
        data.append('username', username)
        data.append('password', password)
        return axios.post(t.$store.state.config['apiurl'], data)
    },

    findsingle: function(t, objectnumber) {
        let data = new FormData()
        data.append('action', 'findsingle')
        data.append('objectnumber', objectnumber)
        return axios.post(t.$store.state.config['apiurl'], data)
    },

    uploadcsvdata: function(t, csvdata) {
        let data = new FormData()
        data.append('action', 'uploadcsvdata')
        data.append('csvdata', csvdata)
        return axios.post(t.$store.state.config['apiurl'], data)
    }

}