const URL = window.location.hostname.includes('localhost')

 ? 'http://localhost:8080'
 : 'https://istudyreact.herokuapp.com';

export default{
    URL,
};