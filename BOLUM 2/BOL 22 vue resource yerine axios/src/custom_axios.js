import axios from 'axios'

const instance = axios.create({ 
    baseURL : "https://vuejs-axios-blog-78f95.firebaseio.com",
 })

//  instance.defaults.headers.common["xxxxx"]

export default instance;