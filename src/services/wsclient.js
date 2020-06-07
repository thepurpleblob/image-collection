import axios from 'axios';

export default {

    findimages: function(store, searchtext, filtercats) {
        let data = new FormData()
        data.append('action', 'findimages')
        data.append('searchtext', searchtext)
        data.append('filtercats', filtercats.join())
        var items = axios.post(store.state.config['apiurl'], data)
        return items
    },

    authenticate: function(store, username, password) {
        let data = new FormData()
        data.append('action', 'authenticate')
        data.append('username', username)
        data.append('password', password)
        return axios.post(store.state.config['apiurl'], data)
    },

    findsingle: function(store, objectnumber) {
        let data = new FormData()
        data.append('action', 'findsingle')
        data.append('objectnumber', objectnumber)
        return axios.post(store.state.config['apiurl'], data)
    },

    uploadcsvdata: function(store, csvdata) {
        let data = new FormData()
        data.append('action', 'uploadcsvdata')
        data.append('csvdata', csvdata)
        return axios.post(store.state.config['apiurl'], data)
    },

    uploadzipfile: function(store, zipfile) {
        let data = new FormData()
        data.append('action', 'uploadzipfile')
        data.append('zipfile', zipfile)
        return axios.post(store.state.config['apiurl'], data)
    },

    loggedin: function(store, token) {
        let data = new FormData()
        data.append('action', 'loggedin')
        data.append('token', token)
        return axios.post(store.state.config['apiurl'], data)
    },

    getcategories: function(store) {
        return axios.get(store.state.config['apiurl'] + '?action=getcategories')
    }

}