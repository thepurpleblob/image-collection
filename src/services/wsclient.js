import axios from 'axios';
import config from '@/config/config.js'

export default {

    findimages: function(searchtext) {
        return axios.get(config.apiurl, {
            params: {
                action: 'findimages',
                searchtext: searchtext
            }
        })
    }

}