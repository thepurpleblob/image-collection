import axios from 'axios';
import config from '@/config/config.js'

export default {

    findimages: function(searchtext) {
        let data = new FormData()
        data.append('action', 'findimages')
        data.append('searchtext', searchtext)
        return axios.post(config.apiurl, data)
    },

    authenticate: function(username, password) {
        let data = new FormData()
        data.append('action', 'authenticate')
        data.append('username', username)
        data.append('password', password)
        return axios.post(config.apiurl, data)
    },

    findsingle: function(objectnumber) {
        let data = new FormData()
        data.append('action', 'findsingle')
        data.append('objectnumber', objectnumber)
        return axios.post(config.apiurl, data)
    },

}