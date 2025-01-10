// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery
// axios is a js library
// it helps to make request from browser (plain js/Vue/React/Angular), node.js

// + very easy to use
// + it supports all modern browser includig IE
// + it returns promise
// + throws error brilliantly
// + No need to set header cause axios is intelligent
const axios = require('axios');
// axios(config)
// axios(url [, config])

// axios.get(url [, config])
// axios.post(url [, config])
// axios.put(url [, config])
// axios.patch(url [, config])
// axios.delete(url [, config])

// axios returns response object - data, status, statusText, headers, config

console.clear();
// console.log(window);

const makeRequest = async (config) => {
  return await axios(config);
};

// axios.get("https://jsonplaceholder.typicode.com/posts/101") 
// .then((res)=>{
//     // console.log(res);
//     console.log(res.data);
// })
// .catch((error)=>console.log(error))

const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
     // console.log(res.data);
     const d ={
      id: res.data.id,
      title: res.data.title,
      body: res.data.body
     }
     console.log(d)
    })
    .catch((err) => console.log(err));
};
getData();




const createData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "post",
    data: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
// createData();

const updateData = ()=>{
  makeRequest({
    url:"https://jsonplaceholder.typicode.com/posts/1",
    method: "put",
    data: JSON.stringify({
      id: 1,
      title: "fooma",
      body: "barma",
      userId: 1,
    })
  })
  .then((res)=>console.log(res.data))
  .catch((err)=>console.log(err))

}
// updateData()

const deleteData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "delete",
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
// deleteData();