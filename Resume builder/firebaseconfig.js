
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
        import {  getFirestore, getDocs, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyC47oEKcVbL5T7R_F783tevqcFTH8R1EHo",
          authDomain: "resumes-c23f8.firebaseapp.com",
          projectId: "resumes-c23f8",
          storageBucket: "resumes-c23f8.appspot.com",
          messagingSenderId: "156434018847",
          appId: "1:156434018847:web:acd23159dd1b48da375b2a"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);

          // Initialize Cloud Firestore and get a reference to the service
           const db = getFirestore(app);


//add data in firebase
async function submitData(){

    let data_name=document.getElementById("name").value;
    let data_email=document.getElementById("email").value;
    let data_password=document.getElementById("password").value;
    
          if (data_name=="" || data_email=="" ||  data_password==""){
                alert("Please fill empty fields")
          }
          else{
            const firebaseid= await addDoc(collection(db,"register"),{
    
      
    name:data_name,
    email:data_email,
    password:data_password
          
    
    })
          const eachid=firebaseid.id
    
     window.location="login.html"
      
    }}

    window.submitData=submitData







    // let params=new URLSearchParams(document.location.search)
    // let id=params.get("id")


 function loginuser(){
 getDocs(collection(db, "register")).then(logpage => {
   
         let email=document.getElementById("mail").value;
         let password=document.getElementById("pass").value;
         
         if(email=="" || password==""){
             alert("Please fill empty Fields")
             return
             
         }
         let userdatas=false
         logpage.forEach((each)=>{
             let datas=each.data();

            
             if (email==datas.email && password==datas.password){
                  userdatas={
                     mail:datas.email,
                     id:each.id,
                     name:datas.name
                 }

                 localStorage.setItem("userdatas",JSON.stringify(userdatas))
                 location=`userhidden.html?id=${each.id}`
             }
         })

        //  if(!userdatas){

        //      alert("your email or password incorrect")

        //      }
               
     })
 }




window.loginuser=loginuser




           async function submitResume(){
            let existing_data=localStorage.getItem("userdatas")
            let parsed_data=JSON.parse(existing_data)
            const docRef= await addDoc(collection(db, "resumes"),{...myResume,userid:parsed_data.id});
            window.location=`list.html?resume_id=${docRef.id}`
        
           
           }
    
window.submitResume=submitResume()