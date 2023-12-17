const URL = window.location.hostname.includes('localhost')

 ? 'http://localhost:8080'
 : 'https://istudyreact-daa25f3facad.herokuapp.com';

export default{
    URL,
};