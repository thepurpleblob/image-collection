import axios from 'axios';

export default {

    findimages: function(searchtext, filtercats) {
        let data = new FormData()
        data.append('action', 'findimages')
        data.append('searchtext', searchtext)
        data.append('filtercats', filtercats.join())
        var items = axios.post(process.env.VUE_APP_API_URL, data)
        return items
    },

    authenticate: function(username, password) {
        let data = new FormData()
        data.append('action', 'authenticate')
        data.append('username', username)
        data.append('password', password)
        return axios.post(process.env.VUE_APP_API_URL, data)
    },

    findsingle: function(objectnumber) {
        let data = new FormData()
        data.append('action', 'findsingle')
        data.append('objectnumber', objectnumber)
        return axios.post(process.env.VUE_APP_API_URL, data)
    },

    uploadcsvdata: function(csvdata) {
        let data = new FormData()
        data.append('action', 'uploadcsvdata')
        data.append('csvdata', csvdata)
        return axios.post(process.env.VUE_APP_API_URL, data)
    },

    uploadzipfile: function(zipfile) {
        let data = new FormData()
        data.append('action', 'uploadzipfile')
        data.append('zipfile', zipfile)
        return axios.post(process.env.VUE_APP_API_URL, data)
    },

    loggedin: function(token) {
        let data = new FormData()
        data.append('action', 'loggedin')
        data.append('token', token)
        return axios.post(process.env.VUE_APP_API_URL, data)
    },

    getcategories: function() {
        return axios.get(process.env.VUE_APP_API_URL + '?action=getcategories')
    }

}