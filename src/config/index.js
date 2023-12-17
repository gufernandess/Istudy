const URL = window.location.hostname.includes('localhost')

 ? 'http://localhost:8080'
 : 'https://istudy-qtxs.onrender.com';

export default{
    URL,
};