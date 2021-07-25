import axios from "axios";

// interface iRequestSetup{
//     baseUrl:string,
//     token:string
// }

// const setup:iRequestSetup = {
//     baseUrl:'http://localhost:3000',
//     token:""
// }

// export function getResquest(path:string){
//     return axios.request({
//         method:'GET',
//         url:`${setup.baseUrl + path}`

//     })
// }

export default axios.create({
    baseURL: 'http://localhost:3000'
    // baseURL: 'https://api.github.com'
});

// export default api;