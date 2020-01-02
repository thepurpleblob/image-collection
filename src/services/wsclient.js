import axios from 'axios';
import config from '@/config/config.js'

export default {

    findimages: function(searchtext) {
        let data = new FormData()
        data.append('action', 'findimages')
        data.append('searchtext', searchtext)
        return axios.post(config.apiurl, data)
    }

}