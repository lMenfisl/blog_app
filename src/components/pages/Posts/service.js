
const BASE_URL = 'http://blog.api.axenov-it.com';

export function getPosts() {
    return fetch(`${BASE_URL}/posts`)
        .then(responce => {
            return responce.json();
        })
        .then(posts=>{
            console.log(posts);
        })
}