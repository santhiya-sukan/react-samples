import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'; 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
    
  </StrictMode>,
)
 
let promise = new Promise((resolve, reject) => {
  // asynchronous operation
  const success = true;
  if (success)
     {
    resolve('Success!');
  } 
  else
   {
    reject('Error!');
  }
});

promise
  .then((result) => {
    console.log(result); // 'Success!' (this will print)
  })
  .catch((error) => {
    console.error(error); // 'Error!'
  });

let promise=new Promise((resolve,reject)=>{
  const success=true;
  if(success){
    resolve("success");
  }

  else{
    reject("error");
  }
});
promise
.then((result)=>{
  console.log("success");
});
.catch((error)=>{
  console.log("errror");
});
