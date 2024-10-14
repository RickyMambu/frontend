//Asynchronous JS -> multi thread -> non-blocking
//1. Parallel
// setTimeout(()=>{
//     console.log("Process 1");
// },3000)
// setTimeout(()=>{
//     console.log("Process 2");
// },5000)
// setTimeout(()=>{
//     console.log("Process 3");
// },4000)   //akan buat thread baru sendiri
//2. Concurent
// setTimeout(()=>{
//     console.log("Process 1");
//     setTimeout(()=>{
//         console.log("Process 2");
//         setTimeout(()=>{
//             console.log("Process 3");
//             setTimeout(()=>{
//                 console.log("Process 4");
//             },3000) 
//         },3000) 
//     },3000) 
// },3000) 

//Promise
// let condition = true
// const newPromise = new Promise((resolve, reject) => {
//     if (condition){
//         resolve("Berhasil")
//     } else {
//         reject("Gagal")
//     }  
// })

// //Cara pakai promise
// //1. then - catch
// newPromise
//     .then((result)=>console.log(result))
//     .catch(error => console.log(error)) 

// //2. Async - Await
// //Harus dibuat dalam fungsi
// const consumePromise = async () => {
//     try{
//         let result = await newPromise
//         console.log(result);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

//Pakai promise yang sudah ada
//1.Fetch
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((json) => console.log(json))

// (async () => {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users")
//     let json = await response.json
//     json.forEach(({ name }) => console.log(name))
        
// })();

//2. Axios
axios 
    .get()
    .then((result)=> console.log(result.data))

(async () => {
    let result = await axios.get("https://jsonplaceholder.typicode.com/users")
    result.data.forEach(({name}) => console.log(name))
})()



//Synchronous -> single thread -> blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses yang memakan waktu lama");
// console.log("Proses 4");
