// search phone 

fetch(' https://openapi.programming-hero.com/api/phones?search=oppo')
    .then(res => res.json())
    .then(data => console.log(data.data))
