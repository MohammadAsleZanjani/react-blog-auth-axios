import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_BLOG_BASEURL,
    timeout: 5000, // Adjust timeout as needed
});



export default api;

