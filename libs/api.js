import axios from "axios"




let baseUrl = 'http://localhost:3001'

export function getData(endpoint) {
    try {
        let res = axios.get(`${baseUrl}/${endpoint}`)
        return res
    } catch (error) {
        throw error
    }
}

export function postData(endpoint, body) {

    try {
        let res = axios.post(`${baseUrl}/${endpoint}`, body)
        return res
    } catch (error) {
        throw res

    }
}