// function addTask(){
//     const newTask=document.createElement("li")
//     const taskList=document.getElementById("taskList")
//     taskList.appendChild(newTask)
//     newTask.textContent=document.getElementById("inputTask").Value
// document.getElementById("inputTask").Value=""
// deleteTask(newTask)


// };
// function deleteTask(newTask){
//     const deleteBtn=document.createElement("button")
//     deleteBtn.textcontent="Delete"
//     newTask.appendChild(deleteBtn)
//     deleteBtn.onclick=function(){
//         newTask.remove()
//     }
    
// };

// let items=[250,645,300,900,50];
// let i=0;
// for(i=0;i<items.length;i++){
//     console.log(items[i]);
//     let offer=items[i]/10;
//     items[i]=items[i]-offer;
//     console.log(`value after discount is:${items[i]}`)
// }
// 
// 
// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }
// getData(1,()=>{
//     getData(2,()=>getData(3))

// });
// let promise=new Promise((resolve,reject)=>{
//     console.log("i am a promise");
//     // resolve("success");
//     reject("error");
// });
// 
// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         resolve("success");
//     });
// };
// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled",res);
// });
// promise.catch((res)=>{
//     console.log("rejected",err);
// });
// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success")
//         },4000);
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success")
//         },4000);
//     });
// }
// console.log("fetching data1....");
// asyncFunc1().
// then((res)=>{
//     console.log("fetching data2.....");
//     asyncFunc2().
//     then((res)=>{});
//     });
function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{

    
    setTimeout(()=>{
        console.log("data",dataId);
    resolve("success");
        
    },2000);
});
}
getData(1)
.then((res)=>{
    return getData(2);

})
.then((res)=>{
    return getData(3);
    
})
.then((res)=>{
    return getData(4);
    
})
.then((res)=>{
    console.log("success");
});