import fetch from  'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlAPI, data){
    const response = fetch(urlAPI,{
        method: 'POST',
        mode: 'cors',
        credentials: 'sane-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    return response;
}

const data = {
    "title": "puto el que lo lea.",
    "price": 3333,
    "description": "This is another description",
    "categoryId": 2,
    "images": ["https://placeimg.com/640/480/any"]
}
postData(`${API}/products`,data)
 .then(response => response.json())
 .then(data => console.log(data))