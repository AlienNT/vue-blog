import axios from 'axios'

export async function requestServerApi (method, url, data = null) {
    return axios({ data, url, method })
}
