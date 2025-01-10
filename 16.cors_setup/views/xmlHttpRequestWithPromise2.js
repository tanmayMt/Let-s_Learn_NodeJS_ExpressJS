console.clear();
const makeRequest = (method,url,data)=>{
    return new Promise((reslove,reject)=>{
        const xhr = new XMLHttpRequest(); // we can call API and sent those HTTP request(Like GET,POST,UPDATE,DELETE) to server.
        xhr.open(method,url)// useing open() function we initialize the request
    
        xhr.setRequestHeader('Content-Type', 'application/json'); //setRequestHeader() function is used to specify that the Request should be in json Formate

        xhr.onload = ()=>{//using onload event we will process the data
            const data = xhr.response;
            // console.log(data);
            console.log(JSON.parse(data));
        }
        xhr.onerror = () =>{
            console.log("Error is Occured!!")
        }
        xhr.send(JSON.stringify(data)); //Sent the Http Request
    })
}

const getData = () =>{
    makeRequest('GET','https://jsonplaceholder.typicode.com/posts').then((res)=>console.log(res))
}
getData();

const sentData = () =>{
    makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
        title: 'new',
        body: 'bar',
        userId: 1,
    });
}
// sentData()

const updateData = () => {
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        id: 1,
        title: 'New_Update',
        body: 'bar_Update',
        userId: 1,
    });
}
// updateData()

const updateSingleData = () => {
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {

        title: 'This is changed',

    });
}
// updateSingleData();

const deleteData = () => {
    makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
}
// deleteData();