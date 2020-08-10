import axios from 'axios';

export default {

    savesearch: function(searchparams) {
        let data = new FormData()
        data.append('searchparams', JSON.stringify(searchparams))
        return axios.post(process.env.VUE_APP_API_URL, data)
    },

    getsearch: function() {
        return axios.get(process.env.VUE_APP_API_URL + '?action=getsearch')
    },

    findimages: function(searchtext, filtercats) {
        let data = new FormData()
        data.append('searchtext', searchtext)
        data.append('filtercats', filtercats.join())
        var items = axios.post(process.env.VUE_APP_API_URL + '/findimages', data)
        return items
    },

    findsingle: function(objectnumber) {
        let data = new FormData()
        data.append('action', 'findsingle')
        data.append('objectnumber', objectnumber)
        return axios.post(process.env.VUE_APP_API_URL, data)
    },

    uploadcsvdata: function(csvdata, progressCallback) {
        let data = new FormData()
        data.append('csvdata', csvdata)
        let settings = {
            onUploadProgress: progressCallback
        }
        return axios.post(process.env.VUE_APP_API_URL + '/uploadcsv', data, settings)
    },

    uploadzipfile: function(zipfile, progressCallback) {
        let data = new FormData()
        let settings = {
            headers: { 'content-type': 'multipart/form-data' },
            onUploadProgress: progressCallback
            }
        data.append('zipfile', zipfile)
        return axios.post(process.env.VUE_APP_API_URL + '/uploadzip', data, settings)
    },

    loggedin: function(token) {
        let data = new FormData()
        data.append('action', 'loggedin')
        data.append('token', token)
        return axios.post(process.env.VUE_APP_API_URL, data)
    },

    login: function(email, password) {
        let data = new FormData()
        data.append('email', email)
        data.append('password', password)
        return axios.post(process.env.VUE_APP_API_URL + '/login', data)
    },

    getcategories: function() {
        return axios.get(process.env.VUE_APP_API_URL + '?action=getcategories')
    }

}