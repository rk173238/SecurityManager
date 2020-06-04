import axios from 'axios'
import https from 'https'
import {urlConstants} from '../constants'
const Api = axios.create({
  baseURL: urlConstants.BASE_URL,
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
})
export default Api
