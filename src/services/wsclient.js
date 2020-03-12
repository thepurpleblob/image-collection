import axios from 'axios';
import store from '@/store'

export default {

    findimages: function(searchtext) {
        let data = new FormData()
        data.append('action', 'findimages')
        data.append('searchtext', searchtext)
        return axios.post(store.state.config['apiurl'], data)
    },

    authenticate: function(username, password) {
        let data = new FormData()
        data.append('action', 'authenticate')
        data.append('username', username)
        data.append('password', password)
        return axios.post(store.state.config['apiurl'], data)
    },

    findsingle: function(objectnumber) {
        let data = new FormData()
        data.append('action', 'findsingle')
        data.append('objectnumber', objectnumber)
        return axios.post(store.state.config['apiurl'], data)
    },

    uploadcsvdata: function(csvdata) {
        let data = new FormData()
        data.append('action', 'uploadcsvdata')
        data.append('csvdata', csvdata)
        return axios.post(store.state.config['apiurl'], data)
    },

    uploadzipfile: function(zipfile) {
        let data = new FormData()
        data.append('action', 'uploadzipfile')
        data.append('zipfile', zipfile)
        return axios.post(store.state.config['apiurl'], data)
    },

    loggedin: function(token) {
        window.console.log('check token ' + token)
        let data = new FormData()
        data.append('action', 'loggedin')
        data.append('token', token)
        return axios.post(store.state.config['apiurl'], data)
    }

}