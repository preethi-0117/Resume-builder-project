
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
        import {  getFirestore, getDocs, collection, addDoc, query, where, deleteDoc, doc, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
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


           let editdata={}


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

               
     })
 }




window.loginuser=loginuser




           async function submitResume(){
            let existing_data=localStorage.getItem("userdatas")
            let parsed_data=JSON.parse(existing_data)
            const docRef= await addDoc(collection(db, "resumes"),{...myResume,userid:parsed_data.id});
            window.location="list.html"

            if(!localStorage.getItem("userdatas")){
                location="login.html"
            }
           
           }
    
window.submitResume=submitResume



function resumeCreate(){




getDocs(collection(db,"register")).then(docSnap=>{
    let users=[]
docSnap.forEach((doc)=>{
    users.push({...doc.data(),id:doc.id})
})
       console.log(users)


let existing_data=localStorage.getItem("userdatas")
let converted=JSON.parse(existing_data)

let params = new URLSearchParams(document.location.search);
let firebaseid = params.get("id");


if (converted['id']==firebaseid){
window.location=`resumes.html`
}

else{
    window.location="login.html"
}
}

)

}

window.resumeCreate=resumeCreate




function removeData(){
  localStorage.removeItem("userdatas")
  location="login.html"
}

window.removeData=removeData



function getDatas(){
  let existing_data=localStorage.getItem("userdatas")
  let parse_data=JSON.parse(existing_data)

 getDocs(query(collection(db,"resumes"),where("userid","==",parse_data.id))).then(docSnap => {
 
          let renderHTML=''
          // let list=document.getElementById("list").value
          docSnap.forEach((doc)=>{

            
              renderHTML=renderHTML+ `<li class="list"><a href="view.html?id=${doc.id}">${doc.data().title}</a><button type="button" onclick="deleteData('${doc.id}')" class="del">Delete</button><a href="edit.html?id=${doc.id}"><button type="button" onclick="viewResumeEdit()">Edit</button></a></li>`
          
          document.getElementById("list").innerHTML=renderHTML
        })

      

      })
    }

    window.getDatas=getDatas




    function deleteData(dataid){

      deleteDoc(doc(db,"resumes",dataid))
      getDatas()
  
      }
     
  
     window.deleteData=deleteData




  //    function removeData(){
  //     localStorage.removeItem("userdatas")
  //     location="login.html"
  // }
  //    window.removeData=removeData


function getResumeDatas(){

     let params = new URLSearchParams(document.location.search);
     let id = params.get("id");
 
     getDocs(collection(db,"resumes")).then(docSnap=>{
         docSnap.forEach((doc)=>{
             if(id==doc.id){
                 let editdata=doc.data()
                 editdata=editdata
                 document.getElementById("title").innerHTML= editdata.title
                 document.getElementById("name").innerHTML= editdata.name
                 document.getElementById("email").innerHTML= editdata.email
                 document.getElementById("phone").innerHTML= editdata.phone
                 document.getElementById("address").innerHTML= editdata.address
               
                 document.getElementById("summary").innerHTML= editdata.summary
                 document.getElementById("linkedin").innerHTML= editdata.linkedin
                 document.getElementById("github").innerHTML= editdata.github
                 
                
                
 let trs=""
 
 for (let each of editdata.education){
     trs=trs + `<tr> 
         <td> ${each.course_name}</td>
         <td> ${each.ins_name}</td>
         <td> ${each.percentage}</td>
         <td> ${each.year}</td>
         </tr>`
         
     }
     document.getElementById("trs").innerHTML=trs
 
 // //to show certification in view html
 
 let certify="" 
 
 for (let each of editdata.certificates){
     certify= certify + `<tr>
         <td>${each.course_name}</td>
         <td>${each.year}</td>
         </tr>`
 }
 
 document.getElementById("view_certificates").innerHTML=certify
 
 // //to show projects value in view html 
 
 let project=""
 
 for (let each of editdata.projects){
     project=project + `<tr>
         <td>${each.project_name}</td>
         <td>${each.duration}</td>
         <td>${each.team_size}</td>
         <td>${each.organization}</td>
         </tr>`
     }
 
    document.getElementById("project").innerHTML=project
 
 
 // //to show experience value in view html
 
 let experienced=""
 
 for (let each of editdata.experience){
     experienced=experienced + `<tr>
         <td>${each.company_name}</td>
         <td>${each.year_of_experience}</td>
         </tr>`
 }
 
 document.getElementById("experience").innerHTML=experienced
 
 //to show skills in view html
 
 let hardskill=""
 
 for (let each of editdata.hard_skills){
     hardskill= hardskill + `<li>${each}</li>`
 }
 
 document.getElementById("hardskill").innerHTML=hardskill
 
 let softskill=""
 
 for (let each of editdata.soft_skills){
     softskill= softskill + `<li>${each}</li>`
 }
 
 document.getElementById("softskill").innerHTML=softskill
 
 //to show hobbies in view page
 
 let hobby=""
 
 for (let each of editdata.hobbies){
     hobby= hobby + `<li>${each}</li>`
 }
 
 document.getElementById("view_hobby").innerHTML=hobby
 
 //to show language in view page
 
 let language=""
 for (let each of editdata.languages_known){
     language=language + `<li>${each}</li>`
 }
 document.getElementById("view_language").innerHTML=language
 
 
             }
         })
        
     })


    
    }
    window.getResumeDatas=getResumeDatas




   
    
        
    function gototemplate(template_id){

        let idparam = new URLSearchParams(document.location.search);
        let id1 = idparam.get("id");


        if(template_id==1){
            window.location=`template_1/index.html?id=${id1}`
            
        }
        else if(template_id==2){
            window.location=`template_2/index.html?id=${id1}`
    
        }
        else if(template_id==3){
            window.location=`template_3/index.html?id=${id1}`
    
        }
    
        else if(template_id==4){
            window.location=`template_4/index.html?id=${id1}`
        }
        
    }

    window.gototemplate=gototemplate




    function viewResumeEdit(){

        let params = new URLSearchParams(document.location.search);
        let id = params.get("id");

    getDocs(collection(db,"resumes")).then(docSnap=>{
    docSnap.forEach((doc)=>{
        if(id==doc.id){
            let resumeData=doc.data()
            editdata=resumeData

    //single values show in input box

    document.getElementById("input").value=editdata.title
        
    document.getElementById("changename").value=editdata.name
    document.getElementById("editemail").value=editdata.email
    document.getElementById("editaddress").value=editdata.address
    document.getElementById("editphone").value=editdata.phone
    document.getElementById("editsummary").value=editdata.summary
    document.getElementById("editlinkedin").value=editdata.linkedin
    document.getElementById("editgithub").value=editdata.github
  

    //   //to show skills value in input box  

let hardskill_add="";

for (let each of editdata.hard_skills){
     hardskill_add= hardskill_add + `<input type="text" value="${each}" class="hardskill_input"></input>`
    }
document.getElementById("edit_hardskill").innerHTML=hardskill_add


let softskill_add="";

for (let each of editdata.soft_skills){
     softskill_add= softskill_add + `<input type="text" value="${each}" class="softskill_input"></input>`
    }
document.getElementById("edit_softskill").innerHTML=softskill_add



//     //to show language value in input box

let language=""

for (let each of editdata.languages_known){
    language =language + `<input type="text" value="${each}" class="language_input"></input>`
    
}
document.getElementById("edit_language").innerHTML=language




//     //to show hobbie value in input box

let hobbie=""

for (let each of editdata.hobbies){
    hobbie= hobbie + `<input type="text" value="${each}" class="hobby_input"></input>`
}
document.getElementById("edit_hobby").innerHTML=hobbie





let educate=""

for (let each in editdata.education){
    educate=educate + `<tr> 
        <td> <input type="text" value=${editdata.education[each].course_name} class="educat_input" onkeyup="storeData(this,${each},'course_name','education')"></input></td>
        <td> <input type="text" value=${editdata.education[each].ins_name} class="educat_input" onkeyup="storeData(this,${each},'ins_name','education')"></input></td>
        <td> <input type="text" value=${editdata.education[each].percentage} class="educat_input" onkeyup="storeData(this,${each},'percentage','education')"></input></td>
        <td> <input type="text" value=${editdata.education[each].year} class="educat_input" onkeyup="storeData(this,${each},'year','education')"></input></td>
        </tr>`
        
    }
    document.getElementById("edit_educat").innerHTML=educate



// //to show experience value in input box

let experienc=""

for (let each in editdata.experience){
experienc=experienc + `<tr>
    <td> <input type="text" value=${editdata.experience[each].company_name} class="company_input" onkeyup="storeData(this,${each},'company_name','experience')"></input></td>
    <td> <input type="text" value=${editdata.experience[each].year_of_experience} class="company_input" onkeyup="storeData(this,${each},'year_of_experience','experience')"></input></td>
   <tr>`

}

document.getElementById("edit_experience").innerHTML=experienc


// //education,projects,experience,certificates onkeyup update function:  




// //to show projects value in input box

let proj=""

for (let each in editdata.projects){
    proj = proj + `<tr>
        <td> <input type="text" value=${editdata.projects[each].project_name} class="project_input" onkeyup="storeData(this,${each},'project_name','projects')"></input></td>
        <td> <input type="text" value=${editdata.projects[each].duration} class="project_input" onkeyup="storeData(this,${each},'duration','projects')"></input></td>
        <td> <input type="text" value=${editdata.projects[each].team_size} class="project_input" onkeyup="storeData(this,${each},'team_size','projects')"></input></td>
        <td> <input type="text" value=${editdata.projects[each].organization} class="project_input" onkeyup="storeData(this,${each},'organization','projects')"></input></td>
        </tr>`
}
document.getElementById("edit_project").innerHTML=proj


// //to show certificates value in input box

let certificat=""

for (let each in editdata.certificates){

certificat=certificat + `<tr> 
   
    <td> <input type="text" value=${editdata.certificates[each].course_name} class="certify_input" onkeyup="storeData(this,${each},'course_name','certificates')" ></input></td>
    <td> <input type="text" value=${editdata.certificates[each].year} class="certify_input" onkeyup="storeData(this,${each},'year','certificates')"></input></td>
    </tr>`
    
}
document.getElementById("edit_certify").innerHTML=certificat

}       

    

    });
})


    }
window.viewResumeEdit=viewResumeEdit



function updateResume(){

  let params = new URLSearchParams(document.location.search);
  let id = params.get("id");
// update_Data.addEventListener('click',async(e) => {
  
  let update_title=document.getElementById("input").value;
  let update_name=document.getElementById("changename").value;
  let update_email=document.getElementById("editemail").value;
  let update_address=document.getElementById("editaddress").value;
  let update_phone=document.getElementById("editphone").value;
  let update_summary=document.getElementById("editsummary").value;
  let update_linkedin=document.getElementById("editlinkedin").value;
  let update_github=document.getElementById("editgithub").value;
 
  let update_hardskill=document.getElementsByClassName("hardskill_input")
  let edithardskill=[]
  for (let each of update_hardskill){
      edithardskill.push(each.value)
  }
  let update_softskill=document.getElementsByClassName("softskill_input")
  let editsoftskill=[]
  for (let each of update_softskill){
      editsoftskill.push(each.value)
  }
  let update_hobby=document.getElementsByClassName("hobby_input")
  let edithobby=[]
  for (let each of update_hobby){
      edithobby.push(each.value)
  }
  let update_language=document.getElementsByClassName("language_input")
  let editlanguage=[]
  for (let each of update_language){
      editlanguage.push(each.value)
  }

 




updateDoc(doc(db,"resumes",id),{



  title:update_title,
  name:update_name,
  email:update_email,
  address:update_address,
  phone:update_phone,
  summary:update_summary,
  linkedin:update_linkedin,
  github:update_github,
  hard_skills:edithardskill,
  soft_skills:editsoftskill,
  

     languages_known:editlanguage,
     hobbies:edithobby,

   education:editdata.education,
   experience:editdata.experience,
   projects:editdata.projects,
   certificates:editdata.certificates

  
});


}




 
window.updateResume=updateResume





function add_detail(id){
    
    
  if(id=="edit_hardskill"){
      // Create a new input element skills
  let create_add = document.createElement("input");
  create_add.setAttribute('type', 'text');
  create_add.setAttribute('class', 'hardskill_input'); // Add a class for easier selection

   // Append the input element to the specified container
  document.getElementById("edit_hardskill").appendChild(create_add);
   // Update the skills array in the local storage with the current input value

  }

  else if(id=="edit_softskill"){
      // Create a new input element skills
  let create_add = document.createElement("input");
  create_add.setAttribute('type', 'text');
  create_add.setAttribute('class', 'softskill_input'); // Add a class for easier selection
  
   // Append the input element to the specified container
  document.getElementById("edit_softskill").appendChild(create_add);
   // Update the skills array in the local storage with the current input value

  }
  else if(id=="edit_hobby"){
      // Create a new input element hobbies
  let create_add = document.createElement("input");
  create_add.setAttribute('type', 'text');
  create_add.setAttribute('class', 'hobby_input'); // Add a class for easier selection 

  // Append the input element to the specified container
  document.getElementById("edit_hobby").appendChild(create_add);

  // Update the hobbies array in the local storage with the current input value

  }

  else if(id=="edit_language"){
  // Create a new input element languages
  let create_add = document.createElement("input");
  create_add.setAttribute('type', 'text');
  create_add.setAttribute('class', 'language_input'); // Add a class for easier selection 

  // Append the input element to the specified container
  document.getElementById("edit_language").appendChild(create_add);

  // Update the languages array in the local storage with the current input value

  }
  }

  window.add_detail=add_detail




//   function preview(){
//     document.getElementById("code").innerHTML=JSON.stringify(myResume, null, 4)
// }



// window.preview=preview
  

  function storeData(ele,ele_index,key,par_key){
    // alert(1)
 
   editdata[par_key][ele_index][key]=ele.value
   console.log(editdata)
 
  }

   window.storeData=storeData






function createNewEducation(){
  
    let tbody=document.getElementById("edit_educat").innerHTML
    let educate_length=editdata.education.length
    
    
    let new_education=`<tr><td> <input type="text" onkeyup="storeData(this,${educate_length},'course_name','education')"/></td>
                 <td> <input type="text" onkeyup="storeData(this,${educate_length},'ins_name','education')"/></td>
                 <td> <input type="text" onkeyup="storeData(this,${educate_length},'percentage','education')"/></td>
                 <td> <input type="text" onkeyup="storeData(this,${educate_length},'year','education')"/></td>
            </tr>`
   
     document.getElementById("edit_educat").innerHTML=tbody + new_education
   

     editdata.education[educate_length]=
                                                  {
                                                  course_name:"",
                                                  ins_name:"",
                                                  percentage:"",
                                                  year:""
                                              }

    
    }
    window.createNewEducation=createNewEducation


    





function createNewProject(){
  
    let tbody=document.getElementById("edit_project").innerHTML
    let project_length=editdata.projects.length
    
    
    let new_project=`<tr><td> <input type="text" onkeyup="storeData(this,${project_length},'project_name','projects')"/></td>
                 <td> <input type="text" onkeyup="storeData(this,${project_length},'duration','projects')"/></td>
                 <td> <input type="text" onkeyup="storeData(this,${project_length},'team_size','projects')"/></td>
                 <td> <input type="text" onkeyup="storeData(this,${project_length},'organization','projects')"/></td>
            </tr>`
   
     document.getElementById("edit_project").innerHTML=tbody + new_project
   

     editdata.projects[project_length]=
                                                  {
                                                  project_name:"",
                                                  duration:"",
                                                  team_size:"",
                                                  organization:""
                                              }

    
    }
    window.createNewProject=createNewProject


    function createNewExperience(){
  
        let tbody=document.getElementById("edit_experience").innerHTML
        let experience_length=editdata.experience.length
        
        
        let new_experience=`<tr><td> <input type="text" onkeyup="storeData(this,${experience_length},'company_name','experience')"/></td>
                     <td> <input type="text" onkeyup="storeData(this,${experience_length},'year_of_experience','experience')"/></td>
                </tr>`
       
         document.getElementById("edit_experience").innerHTML=tbody + new_experience
       
    
         editdata.experience[experience_length]=
                                                      {
                                                      company_name:"",
                                                      year_of_experience:"",
                                                      
                                                  }
    
        
        }
        window.createNewExperience=createNewExperience


        
    function createNewCertificates(){
  
        let tbody=document.getElementById("edit_experience").innerHTML
        let certificate_length=editdata.certificates.length
        
        
        let new_certificates=`<tr><td> <input type="text" onkeyup="storeData(this,${certificate_length},'course_name','certificates')"/></td>
                     <td> <input type="text" onkeyup="storeData(this,${certificate_length},'year','certificates')"/></td>
                </tr>`
       
         document.getElementById("edit_certify").innerHTML=tbody + new_certificates
       
    
         editdata.certificates[certificate_length]=
                                                      {
                                                      course_name:"",
                                                      year:"",
                                                      
                                                  }
    
        
        }
        window.createNewCertificates=createNewCertificates