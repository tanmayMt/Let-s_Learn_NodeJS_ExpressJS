// From the front-end if we want to get/fetch any data, or delete any data or edit data of databse. But The database is handel by server(Backend Language -> java,c++ etc).

// To get the database data, we have to call server from Frontend.
// So Actually From the Frontend we want to sent request(Like GET,POST,UPDATE,DELETE) to the Server to access data. So we need a "API" link to sent those request to server.

// In Server the API is created to make the connection/relation between Frontend & Backend.

// So, API is a kind of Llink url through which we can create a conection between Frontend & Server and sent request(Like GET,POST,UPDATE,DELETE) to the Server.

// \*There are mainly 4 Process to calling API:

// 1.  XMLHttp Request
// 2.  Fetch API
// 3.  axios <- javascript Libarey
// 4.  Jquery

console.clear();

// event - onload(), onerror()
// property - response, responseText, responseType, responseURL, status, statusText
// function - open(), send(), setRequestHeader()

//console.log(window) //It is a Build-in Browser Object

const makeRequest = (method,url,data)=>{
    const xhr = new XMLHttpRequest(); // we can call API and sent those HTTP request(Like GET,POST,UPDATE,DELETE) to server.
    xhr.open(method,url)// useing open() function we initialize the request
    
    xhr.setRequestHeader('Content-Type', 'application/json'); //setRequestHeader() function is used to specify that the Request should be in json Formate

    xhr.onload = ()=>{//using onload event we will process the data
        const data = xhr.response;
        // console.log(data);
        console.log("xhr.status: "+xhr.status);
        console.log(`xhr.statusText: ${xhr.statusText}`);
        console.log(`JSON.parse(data): ${JSON.parse(data)}`);
        console.log(JSON.parse(data));
    }
    xhr.onerror = () =>{
        console.log("Error is Occured!!")
    }
    xhr.send(JSON.stringify(data)); //Sent the Http Request
}

const getData = () =>{
    makeRequest('GET','https://jsonplaceholder.typicode.com/posts');
}
// getData();

const sentData = () =>{
    makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
        title: 'new',
        body: 'bar',
        userId: 1,
    });
}
sentData()

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